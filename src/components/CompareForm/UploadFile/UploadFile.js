import React from 'react';
 
const uploadFile = props => {
  return (
    <div className="imposer__form--group">
      <label>Step one</label>
      <input 
        type="file" 
        title="Upload image" 
        onChange={props.onChangeFile} />
    </div>
  )
}
 
export default uploadFile;
 