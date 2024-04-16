import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [fetchData, setFetchData] = useState(null);
  const [axiosData, setAxiosData] = useState(null);

  // Using fetch
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => setFetchData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Using Axios
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => setAxiosData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Fetch Data:</h2>
      {fetchData && (
        <div>
          <p>Title: {fetchData.title}</p>
          <p>Body: {fetchData.body}</p>
        </div>
      )}
      
      <h2>Axios Data:</h2>
      {axiosData && (
        <div>
          <p>Title: {axiosData.title}</p>
          <p>Body: {axiosData.body}</p>
        </div>
      )}
    </div>
  );
};
export default MyComponent;
