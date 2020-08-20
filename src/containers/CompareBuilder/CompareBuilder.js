import React, { Component } from "react";
import AProjectbyPastel from "../../assets/AProjectbyPastel.svg"
import Aux from "../../hoc/Aux";

import CompareForm from '../../components/CompareForm/CompareForm'
class CompareBuilder extends Component {
    state = {
        imageUrl: null,
        iframeUrl: null,
    }
  render() {
      
    return (
      <Aux>
        <div className="imposer">
          <div className="imposer__content">
            <h1 className="imposer__title">Compare pixels</h1>
            <p className="imposer__subtitle">
              See the difference between design mockups and the live website.
            </p>
            <CompareForm />
          </div>
        </div>

        <footer>
          <div className="AProjectbyPastel"><img src={AProjectbyPastel} alt="copy" /></div>
        </footer>
      </Aux>
    );
  }
}

export default CompareBuilder;
