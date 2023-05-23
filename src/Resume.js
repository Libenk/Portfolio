import React from 'react';
import styles from './Card1.module.css';
const ImageViewer = () => {
  const imageUrl = '0001.jpg'; // Replace with the URL or path to your image file

  return (
    <div >
      <button style={{  width:'200px', height: '50px',marginLeft:"25%" , marginTop: '40px' ,backgroundColor: 'grey'}}>Download</button>
      <div style={{ maxWidth: '100%', marginBottom:'5%' ,maxHeight: '100%', overflow: 'hidden', marginLeft:"25%",marginTop:"1%" ,marginRight:"25%" }}>
        <img src={imageUrl} alt="Image" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
      </div>
    </div>
  );
};

export default ImageViewer;                                  