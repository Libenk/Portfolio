import React, { useState } from 'react';
import styles from './Card1.module.css';
import thomas from './Assets/download.jpeg'
import thomas1 from './Assets/download2.jpeg'
const CardComponent = (props) => {
  const{message1}=props;
  return (
    
    <div className={styles.card}>
        <img className={styles['card-image']} src={thomas} alt="Card Image" />
        <textarea
            className={styles['card-input']} disabled={true} value={ message1.Description}> </textarea>
        <div className={styles.lang}>
            <button className={styles['custom-button']}>{message1.Skill1}</button>
            <button className={styles['custom-button']}>{message1.Skill2}</button>
            <button className={styles['custom-button']}>{message1.Skill3}</button>
        </div>
        
  </div>
  );
};

export default CardComponent;
