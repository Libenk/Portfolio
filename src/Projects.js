import './Projects.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Projects() {
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/data'); // Replace '/api/data' with your server's API endpoint
        setData(response.data[0]);
        setIsLoading(false);
        const parsedData = JSON.parse(response.data);
        setData(parsedData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (

    
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <pre>{data._id}</pre>       
      )}
    </div>
  );
}

export default Projects;
const Project=()=>{
    return(
           <div>
            <div className='container'>

                    <h1>Project samples that i am doing </h1>
            </div>
          </div>
    );
}
const Project1=()=>{
    return(
           <div>
            <div >
                   <Project></Project>
                   <Project></Project>
                   <Project></Project>
                   <Project></Project>
                   <Project></Project>
                   
            </div>
          </div>
    );
}
