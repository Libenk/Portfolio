// CardList.js
import React, { useRef } from 'react';
import './Card.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CardComponent from './Card1';
const CardList = (props) => {
  const {message1}= props;
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -460,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 460,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="card-list">
      <h1>Projects</h1>
      <div className="card-container" ref={cardContainerRef}>
        {Object.keys(message1).map((key) => (   
                  
                       <CardComponent key={key} message1={message1[key]}></CardComponent>
                  
              ))}
              
      </div>
      {/* <div className="card-button" >
          <button>View more</button>
      </div> */}
     
    </div>
  );
};


export default CardList;
