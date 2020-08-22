import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

// Assets
import imgSubmit from "../../assets/Chevron.svg";
import Aux from "../../hoc/Aux";

// Components
import CompareForm from "../../components/CompareForm/CompareForm";
import CompareDashboard from "../../components/CompareDashboard/CompareDashboard";
import Footer from "../../components/Layout/Footer/Footer";

class CompareBuilder extends Component {
  state = {
    websiteUrl: "",
    isSubmited: true,
    file: null,
    invalidFile: null,
    handleResponse: null,
  };

  uploadOnChangeHandlerFile = (event) => {
    const imgFile = event.target.files[0];
    if (!imgFile) {
      this.setState({ invalidFile: "Please select image" });
      return false;
    }
    if (!imgFile.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      this.setState({ invalidFile: "Please select valid image format" });
      return false;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      this.setState({
        file: URL.createObjectURL(imgFile),
        invalidFile: null,
      });
    };

    reader.onerror = () => {
      this.setState({
        invalidFile: "Invalid file content",
      });
      return false;
    };

    reader.readAsDataURL(imgFile);
  };

  uploadOnChangeHandlerWebsite = (event) => {
    const urlValue = event.target.value;
    if (!urlValue) {
      this.setState({ invalidFile: "Please enter url" });
      return false;
    }
    this.setState((prevState) => {
      return {
        websiteUrl: urlValue,
      };
    });
    var regex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    if (!urlValue.match(regex)) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Check how you wrote the url - it shoud be something like: https://google.com",
        },
      })
      return false;
    }
  };

  handleUpload = () => {
    const { file } = this.state;
    if (!file) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select an image",
        },
      });
      return false;
    }

    const post = {
      url: this.state.websiteUrl,
      userAgent: window.navigator.userAgent,
    };
    axios
      .post("https://api.pastelcanvases.com/verify-url", post)
      .then((response) => {
        let url = response.data.proxyURL.href;
        this.setState({
          urlIframe: url,
          isSubmited: false,
          handleResponse: {
            isSuccess: response.status === 200,
            message: response.data.message,
          },
        });
      })
      .catch((err) => {
        this.setState({
          handleResponse: {
            message: "Please add URL",
          },
        });
      });
  };

  render() {
    return (
      <Aux>
        <Router>
          <div className="imposer">
            {this.state.isSubmited ? (
              <CompareForm
                onChangeFile={this.uploadOnChangeHandlerFile}
                onChangeWebsite={this.uploadOnChangeHandlerWebsite}
                websiteUrl={this.state.websiteUrl}
                error={this.state.invalidFile}
                handleResponse={this.state.handleResponse}
              >
                <button className="btn__oval" onClick={this.handleUpload}>
                  <img src={imgSubmit} alt="submit button" />
                </button>
              </CompareForm>
            ) : (
              <CompareDashboard
                srcDesign={this.state.file}
                srcWebsite={this.state.urlIframe}
              />
            )}
          </div>
          <Footer formIsSubmited={this.state.isSubmited} />
        </Router>
      </Aux>
    );
  }
}

export default CompareBuilder;
