import React from 'react'
 
const website = props => {
  return (
    <div>
      <iframe src={props.src} title="iframe" style={{maxWidth:'100%'}}></iframe></div>
    )
}
 
export default website
 