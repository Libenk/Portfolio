import Header from './Header';
import Portfolio from './portfolio';
import styles from './Card1.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageViewer from './Resume'
import Home  from './Home'
import Projects from './Projects'
import Contact from './Contact';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data1, setData1] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const [data4, setData4] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get('http://localhost:3000/Profile'); // Replace '/api/data' with your server's API endpoint
        const response2 = await axios.get('http://localhost:3000/Skill'); // Replace '/api/data' with your server's API endpoint
        const response3 = await axios.get('http://localhost:3000/Experience'); // Replace '/api/data' with your server's API endpoint
        const response4 = await axios.get('http://localhost:3000/Projects'); // Replace '/api/data' with your server's API endpoint

        setData1(response1.data[0]);
        setData2(response2.data[0]);
        setData3(response3.data[0]);
        setData4(response4.data);

        setIsLoading(false);
        const parsedData1 = JSON.parse(response1.data);
        const parsedData2 = JSON.parse(response2.data);
        const parsedData3 = JSON.parse(response3.data);
        const parsedData4 = JSON.parse(response4.data);
        setData1(parsedData1);
        setData2(parsedData2);
        setData3(parsedData3);
        setData4(parsedData4);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
     

   
    <><div className={styles.main1}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home message={data2} message2={data1} message1={data4} />} />
          <Route path="/Resume" element={<ImageViewer />} />
          {/* { <Route path="/Projects" element={<Projects />} /> } */}
          <Route path="/Contact" element={<Contact message={data1} />} />
        </Routes>
      </Router>
    <p>
         
             
    </p>
<footer><p>&copy; All rights reserved.</p>
      </footer>


    </div></>
  );
};

export default App;
