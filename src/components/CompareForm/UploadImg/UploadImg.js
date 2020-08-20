import React from 'react';
 
const uploadImg = props => {
  return (
    <div className="imposer__form--group">
      <label>Step one</label>
      <input type="file" title="Upload image " />
      <img src={props.previewImg} />
    </div>
  )
}
 
export default uploadImg;
 