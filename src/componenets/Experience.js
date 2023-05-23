import React from 'react';
import './Experience.css'; // Import the CSS file for styling

const Experience = ({ imageUrl, altText }) => {
    return (
        <div className="Experience-container">         

            <div>
                    
                    <h1>Ozmo.inc</h1>     
                 
                    <img src={imageUrl} alt={"altText"} />
                       <h1>Software engineer</h1>
            </div>
            <p>
                •Develop simulator and emulators for different phone brands and devices.<br></br>
                • Photoshopping different kind of images based on client need.<br></br>
                • Manage and organize projects<br></br>
            </p>
        </div>
      
      
    );
  };
  
  export default Experience;