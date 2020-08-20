import React, { Component } from "react";
import AProjectbyPastel from "../../assets/AProjectbyPastel.svg";
import Aux from "../../hoc/Aux";
import axios from "axios";

import CompareForm from "../../components/CompareForm/CompareForm";
import CompareDashboard from "../../components/CompareDashboard/CompareDashboard"
import imgSubmit from "../../assets/Chevron.svg";

class CompareBuilder extends Component {
  state = {
    file: null,
    websiteUrl: "",
  };

  uploadOnChangeHandlerFile = (event) => {
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  };

  uploadOnChangeHandlerWebsite = (event) => {
    const urlValue = event.target.value;

    this.setState((prevState) => {
      return {
        websiteUrl: urlValue,
      };
    });
  };

  postDataHandler = () => {
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
        });
      });
  };

  render() {
    return (
      <Aux>
          <CompareForm
            onChangeFile={this.uploadOnChangeHandlerFile}
            onChangeWebsite={this.uploadOnChangeHandlerWebsite}
            websiteUrl={this.state.websiteUrl}
            
          >
            <div className="imposer__form--group">
              <button className="btn__oval" onClick={this.postDataHandler}>
                <img src={imgSubmit} alt="submit button" />
              </button>
            </div>
          </CompareForm>
          <CompareDashboard
           iframeUrl={this.state.urlIframe}
           fileSource={this.state.file}/>

        <footer>
          <div className="AProjectbyPastel">
            <img src={AProjectbyPastel} alt="copy" />
          </div>
        </footer>
      </Aux>
    );
  }
}

export default CompareBuilder;
