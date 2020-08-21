import React from 'react'
import AdLogo from "../../../assets/AdLogo.svg";
 
const ad = props => {
  return (
    <div className="ad">
            <div>
              <img className="ad__logo" src={AdLogo} alt="Pastel Logo" />
            </div>
            <div>
              <p className="ad__title">
                <strong>Spot any issues on the website?</strong>
              </p>
              <p className="ad__subtitle">
                Share feedback on live websites with Pastel{" "}
                <a href="https://pastel.com">Get started now</a>
              </p>
            </div>
          </div>
  )
}
 
export default ad
 