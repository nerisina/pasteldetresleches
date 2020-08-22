import React from "react";
import {Link} from "react-router-dom";

//Assets
import AProjectbyPastel from "../../../assets/AProjectbyPastel.svg";

import Ad from './Ad'
const footer = (props) => {
  return (
    <footer>
    {props.formIsSubmited ? (
      <div className="AProjectbyPastel">
        <img src={AProjectbyPastel} alt="copy" />
      </div>
    ) : (
      <div className="bottom__nav">
        <div className="bottom__nav--right">
            <Link className="bottom__nav--btn" to="/design">Design</Link>
            <Link className="bottom__nav--btn" to="/website">Website</Link>
        </div>
        <div className="bottom__nav--left">
          <Ad />
        </div>
      </div>
    )}
  </footer>
  )
}

export default footer;
