import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Core from './pages/Core'; // Import the Core component
import Map from './Map'; // Import the Map component
import Background from './Background'
import DraggableMap from './Background';
import './App.css';
import Draggable from 'react-draggable';
import Menu from  './Menu'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import icons from './static/icons.jpg'
import icons2 from './static/icons 2.jpg'
import icons3 from './static/icons 3.jpg'
import RandomNumberDisplay from './Random.js'

const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [showToggles, setShowToggles] = useState(false);
  const [showToggles2, setShowToggles2] = useState(false);
  const [showToggles3, setShowToggles3] = useState(false);
  const [condoToggle, setCondoToggle] = useState(false);
  const [singleFamilyToggle, setSingleFamilyToggle] = useState(false);
  const [multiFamilyToggle, setMultiFamilyToggle] = useState(false);
  const [politicalToggle, setPoliticalToggle] = useState(false);
  const [demographicToggle, setDemographicToggle] = useState(false);
  const [publicProjectsToggle, setPublicProjectsToggle] = useState(false);
  const [whatHappened2008Toggle, setWhatHappened2008Toggle] = useState(false);
  const [yearYearAppreciationToggle, setYearYearAppreciationToggle] = useState(false);

  const handlePoliticalToggle = () => setPoliticalToggle(!politicalToggle);
  const handleDemographicToggle = () => setDemographicToggle(!demographicToggle);
  const handlePublicProjectsToggle = () => setPublicProjectsToggle(!publicProjectsToggle);
  const handleWhatHappened2008Toggle = () => setWhatHappened2008Toggle(!whatHappened2008Toggle);
  const handleYearYearAppreciationToggle = () => setYearYearAppreciationToggle(!yearYearAppreciationToggle);

  const handleCondoToggle = () => {
    setCondoToggle(!condoToggle);
  };

  const handleSingleFamilyToggle = () => {
    setSingleFamilyToggle(!singleFamilyToggle);
  };

  const handleMultiFamilyToggle = () => {
    setMultiFamilyToggle(!multiFamilyToggle);
  };
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  
  const handleGoClick = () => {
    // Check if the entered value is a number
    if (!isNaN(zipCode) && zipCode.trim() !== '') {
      // Redirect to the Core page if the zip code is a valid number
      window.location.href = '/core';
    } else {
      // Add any error handling or user feedback for invalid input
      console.error('Invalid access code. Please enter a valid number.');
    }
  };

  // Execute the logic on app load (similar to componentDidMount)
  useEffect(() => {
    // Add your logic to initialize the map on app load
    console.log('App loaded. Initialize the map here.');
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ position: 'relative' }}>
              {/* Welcome message */}
              <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to Odyssey!</h1>

              {/* Access Code input box and GO button */}
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <label>Enter your Access Code</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter access code"
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  style={{ fontSize: '18px', margin: '10px' }}
                />
                <br />
                <button onClick={handleGoClick}>GO</button>
              </div>

              {/* Mock Reviews */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {/* Top Row */}
                <Card style={{ margin: '10px', padding: '10px' }}>
                  <CardContent>Buyers love Us!</CardContent>
                </Card>
                {/* Bottom Row */}
                <Card style={{ margin: '10px', padding: '10px' }}>
                  <CardContent>And Their agents do too!</CardContent>
                </Card>
              </div>

              {/* Draggable background component */}
              {/* <Background /> */}
            </div>
          }
        />
        <Route path="/core" element={<Core />} />
      </Routes>
    </Router>
  );
};

export default App;
