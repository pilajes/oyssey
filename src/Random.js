import React, { useState, useEffect } from 'react';
const generateRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomNumbers = () => {
  const randomNumbers = [];

  // Listings
  const listingValues = [4, 5, 6, 7, 8];
    const randomNumber = listingValues[Math.floor(Math.random() * listingValues.length)];
    randomNumbers.push(randomNumber);

  // % Resold <5yrs
    const annualTurnover = generateRandomNumberInRange(70, 84) / 10; // 7.0% to 8.4%
    randomNumbers.push(annualTurnover);

  // Turnover
    const turnover = generateRandomNumberInRange(1, 2); // 1% to 2%
    randomNumbers.push(turnover);

  // Avg tag
  const avgTags = ['1.3M', '1.4M', '1.5M', '1.6M'];
    const avgTag = avgTags[Math.floor(Math.random() * avgTags.length)];
    randomNumbers.push(avgTag);

  // Avg Bed
    const avgBed = generateRandomNumberInRange(1, 3); // 1 to 3
    randomNumbers.push(avgBed);

  // Avg Bath
    const avgBath = generateRandomNumberInRange(1, 3); // 1 to 3
    randomNumbers.push(avgBath);

  // Avg sale
  const avgSales = ['1.2M', '1.3M', '1.4M'];
    const avgSale = avgSales[Math.floor(Math.random() * avgSales.length)];
    randomNumbers.push(avgSale);

  // Days to sell
    const daysToSell = generateRandomNumberInRange(41, 61); // 41 to 61
    randomNumbers.push(daysToSell);

  // Avg sqft
    const avgSqft = generateRandomNumberInRange(950, 1900); // 950 to 1900
    randomNumbers.push(avgSqft);

  // Build yr
    const buildYear = generateRandomNumberInRange(1994, 2003); // 1994 to 2003
    randomNumbers.push(buildYear);

  return randomNumbers;
};
const RandomNumberDisplay = ({ imageSrc, altText }) => {
  const [randomNumbers, setRandomNumbers] = useState(Array.from({ length: 10 }, () => 0));
  const [additionalRandomNumber, setAdditionalRandomNumber] = useState(0);
  const numbers = generateRandomNumbers();
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate 9 random numbers for the screen (replace 100 with your desired range)
      const newRandomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
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
          fontSize: '15px',
        }}
      >
        {numbers[0]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '42%',
          fontSize: '15px',
        }}
      >
        {numbers[6]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '62%',
          fontSize: '15px',
        }}
      >
        {numbers[7]}
      </div>
      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}
      <div
        style={{
          position: 'absolute',
          top: '49%',
          left: '19%',
          transform: 'translate(-50%, -50%)',
          fontSize: '15px',
        }}
      >
        {numbers[3]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '31.5%',
          fontSize: '15px',
        }}
      >
        {numbers[2]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '56%',
          fontSize: '15px',
        }}
      >
        {numbers[8]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '76%',
          fontSize: '15px',
        }}
      >
        {numbers[9]}
      </div>
      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '34%',
          fontSize: '15px',
        }}
      >
        {numbers[5]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '60%',
          fontSize: '15px',
        }}
      >
        {numbers[1]}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '75%',
          left: '14%',
          fontSize: '15px',
        }}
      >
        {numbers[4]}
      </div>

      {/* Repeat for the rest of the 7 random numbers */}
      {/* Set exact position for the additional random number */}

    </div>
  );
};

export default RandomNumberDisplay;
