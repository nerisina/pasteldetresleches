import React from "react";
import Aux from "../../hoc/Aux";

import imgSubmit from "../../assets/Chevron.svg";
import UploadImg from "./UploadImg/UploadImg";
import UploadUrl from "./UploadUrl/UploadUrl";

const compareForm = (props) => {
  return (
    <Aux>
      <div className="imposer__form">
        <UploadImg />
        <UploadUrl />
        <div className="imposer__form--group">
          <button className="btn__oval">
            <img src={imgSubmit} alt="submit button" />
          </button>
        </div>
      </div>
    </Aux>
  );
};

export default compareForm;
