import React from "react";

const UploadWebsiteUrl = (props) => {
  return (
    <div className="imposer__form--group">
      <label>Step two</label>
      <input 
      type="text" 
      placeholder="Enter website URL" 
      value={props.websiteUrl}
      onChange={props.onChangeWebsite}/>
    </div>
  );
};

export default UploadWebsiteUrl;
