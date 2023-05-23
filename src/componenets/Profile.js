import React from 'react';
import './Profile.css'; // Import the CSS file for styling
import thomas from './../thomas.jpg';

const ProfileImage = (props) => {
    const { message2 } = props;
    return (
        <div className="profile-container">
            <div className="profile-box">
                <div className="profile-image">
                    <img src={thomas} alt="himage" />     
                </div>
                <h1>{message2.First_Name}  {message2.Last_Name}</h1>
                <h2>{message2.Profession} </h2>

             </div>
             <section>
                 <p>{message2.Note}</p>
             </section>
               
        </div>
      
      
    );
  };
  
  export default ProfileImage;