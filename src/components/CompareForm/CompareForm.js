import React from "react";
import Aux from "../../hoc/Aux";

import UploadFile from "./UploadFile/UploadFile";
import WebsiteUrl from "../../components/CompareForm/UploadWebsiteUrl/UploadWebsiteUrl";

const compareForm = (props) => {
  return (
    <Aux>
        <div className="imposer">

      <div className="imposer__content">
        <h1 className="imposer__title">Compare pixels</h1>
        <p className="imposer__subtitle">
          See the difference between design mockups and the live website.
        </p>
        <div className="imposer__form">
          <UploadFile {...props} />
          <WebsiteUrl {...props} />
          {props.children}
        </div>
      </div>
      </div>
    </Aux>
  );
};

export default compareForm;
