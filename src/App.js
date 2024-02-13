import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Core from './pages/Core';
import ListView from './pages/listview.js'; // Import ListView component
import Profile from './pages/Profile'; // Import Profile component
import UpcomingTours from './pages/UpcomingTours'; // Import UpcomingTours
import Listingone from './pages/listingone.js'
import Map from './Map';
import Background from './Background';
import DraggableMap from './Background';
import './App.css';
import Draggable from 'react-draggable';
import Menu from './Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import icons from './static/icons.jpg';
import icons2 from './static/icons 2.jpg';
import icons3 from './static/icons 3.jpg';
import RandomNumberDisplay from './Random.js';
import map2 from './static/map2.png'

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
    if (!isNaN(zipCode) && zipCode.trim() !== '') {
      window.location.href = '/core';
    } else {
      console.error('Invalid access code. Please enter a valid number.');
    }
  };

  useEffect(() => {
    console.log('App loaded. Initialize the map here.');
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ position: 'relative', overflowX: 'auto' }}>
              <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome to Oyssey!</h1>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <label>Enter your Access Code</label>
                <br />
                <input
                  type="text"
                  placeholder=""
                  value={zipCode}
                  onChange={handleZipCodeChange}
                  style={{ fontSize: '18px', margin: '10px' }}
                />
                <br />
                <button onClick={handleGoClick}>GO</button>
              </div>
              <div className="image-container">
                <img src={map2} alt="Displayed Image" className="centered-image" />
              </div>
              {/* Mock Reviews */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '20px',
                  overflowX: 'auto',
                }}
              >
                {/* "Buyers Love Us" */}
                <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Buyers Love Us!</h2>
                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
                  <div style={{ display: 'flex', overflowX: 'auto' }}>
                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>
                          Excellent service! I found my dream home with Oyssey. Excellent service! I found my dream home
                          with Oyssey.
                        </p>
                      </CardContent>
                    </Card>

                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>
                          Smooth process and great customer support. Highly recommend! Smooth process and great customer
                          support. Highly recommend!
                        </p>
                      </CardContent>
                    </Card>

                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>Outstanding experience with Oyssey. Will use again!</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* "And Their Agents Do Too!" */}
                <h2 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '10px' }}>And Their Agents Do Too!</h2>
                <div style={{ display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
                  <div style={{ display: 'flex', overflowX: 'auto' }}>
                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>
                          Oyssey has made my job easier. The tools provided are fantastic! Oyssey has made my job
                          easier. The tools provided are fantastic!
                        </p>
                      </CardContent>
                    </Card>

                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>Great experience working with Oyssey. Highly recommended!</p>
                      </CardContent>
                    </Card>

                    <Card style={{ margin: '10px', padding: '10px', textAlign: 'center', width: '300px' }}>
                      <CardContent>
                        <Rating name="read-only" value={5} readOnly />
                        <p>Oyssey's platform is user-friendly and efficient!</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              {/* Draggable background component */}
              {/* <Background /> */}
            </div>
          }
        />
        <Route path="/core" element={<Core />} />
        <Route path="/listview" element={<ListView />} /> // Define route for ListView
        <Route path="/profile" element={<Profile />} /> // Define route for Profile
        <Route path="/upcomingtours" element={<UpcomingTours />} /> // Define route for UpcomingTours
        <Route path="/listing/1" element={<Listingone/>} /> // Define route for UpcomingTours
      </Routes>
    </Router>
  );
};

export default App;
