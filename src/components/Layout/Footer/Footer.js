import React from "react";
import {NavLink} from "react-router-dom";

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
      <div className="nav">
        <div className="nav__left">
            <NavLink activeClassName="nav__link--active" className="nav__link" exact to="/design">Design</NavLink>
            <NavLink activeClassName="nav__link--active" className="nav__link" to="/website">Website</NavLink>
        </div>
        <div className="nav__right">
          <Ad />
        </div>
      </div>
    )}
  </footer>
  )
}

export default footer;
