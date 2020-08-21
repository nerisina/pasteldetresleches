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
        <ul className="bottom__nav--right">
            <li className="bottom__nav--btn"><Link to="/design">Design</Link></li>
            <li className="bottom__nav--btn"><Link to="/website">Website</Link></li>
        </ul>
        <div className="bottom__nav--left">
          <Ad />
        </div>
      </div>
    )}
  </footer>
  )
}

export default footer;
