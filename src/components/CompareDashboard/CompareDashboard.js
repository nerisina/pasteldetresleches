import React from 'react'
 
const compareDashboard = props => {
  return (
    <div>
        Hi I am a dashboard
          {/* show file */}
        <img src={props.fileSource} alt="hi"/>

          {/* show iframe */}
      <div
        style={{
          width: "400px",
          height: "600px",
          border: "1px solid #fff",
        }}
      >
        <iframe src={props.iframeUrl} title="iframe"></iframe>
      </div>
    </div>
  )
}
 
export default compareDashboard
 