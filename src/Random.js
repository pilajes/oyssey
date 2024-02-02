import React, { useState, useEffect } from 'react';

const RandomNumberDisplay = ({ imageSrc, altText }) => {
  const [randomNumbers, setRandomNumbers] = useState(Array.from({ length: 10 }, () => 0));
  const [additionalRandomNumber, setAdditionalRandomNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate 9 random numbers for the screen (replace 100 with your desired range)
      const newRandomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
      setRandomNumbers(newRandomNumbers);

      // Generate an additional random number
    }, 5000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="formControlContainer" style={{ position: 'relative' }}>
      <img
        src={imageSrc}
        alt={altText}
        style={{
          marginRight: '5px',
          width: '90%', // Adjust the width as needed
        }}
      />
      {/* Set exact positions for each of the 10 numbers */}
      <div
        style={{
          position: 'absolute',
          top: '3%',
          left: '6%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[0]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '42%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[1]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '62%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[2]}
      </div>
      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}
      <div
        style={{
          position: 'absolute',
          top: '49%',
          left: '19%',
          transform: 'translate(-50%, -50%)',
          fontSize: '30px',
        }}
      >
        {randomNumbers[3]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '3%',
          left: '31.5%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[4]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '56%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[5]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '76%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[6]}
      </div>
      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '34%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[7]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '60%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[8]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '14%',
          fontSize: '30px',
        }}
      >
        {randomNumbers[9]}
      </div>

      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}

    </div>
  );
};

export default RandomNumberDisplay;
