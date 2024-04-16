import React, { useState, useEffect } from 'react';
let intervalId;

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = 'You have been on this page for ${seconds} seconds';
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  });

  useEffect(() => {
    // Update the seconds state every second
    const intervalId = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p>You've been on this page for {seconds} seconds</p>
    </div>
  );
}

export default Timer;
