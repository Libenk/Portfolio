import './Contact.css';
import thomas from './thomas.jpg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Contact=(props)=>{
    const { message } = props;
    return(
           <div className='container1'>
               <div><img src={thomas} alt='Contact'></img></div>
               <section>
                    <div><h1>Name:  </h1><h2> {message.First_Name} {message.Last_Name} </h2></div>  
                    <div><h1>Occupation:</h1><h2> {message.Profession}</h2></div>
                    <div> <h1>Linkedin:</h1><h2>{message.Linkedin_Url}</h2></div>
                    <div><h1>Email: </h1><h2> {message.Email_Address}</h2></div>
                    <div> <h1>Company: </h1><h2> {message.Company} </h2></div>
               </section>    
          </div>
    );
}
export default Contact;