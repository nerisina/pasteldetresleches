import React from 'react'
 
const website = props => {
  return (
      <iframe src={props.src} title="iframe" style={{width:'100%', height: '100%'}}></iframe>
    )
}
 
export default website
 