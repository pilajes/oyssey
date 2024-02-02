import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Map from '../Map';
import Background from '../Background.js';
import DraggableMap from '../Background.js';
import Draggable from 'react-draggable';
import Menu from '../Menu';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Radio from '@mui/material/Radio';
import icons from '../static/icons.jpg';
import icons2 from '../static/icons 2.jpg';
import icons3 from '../static/icons 3.jpg';
import RandomNumberDisplay from '../Random.js';

const Core = () => {
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
    console.log('Zip Code:', zipCode);
    window.location.href = '/core';
  };

  useEffect(() => {
    console.log('App loaded. Initialize the map here.');
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        placeholder="Enter a zip code to get started"
        value={zipCode}
        onChange={handleZipCodeChange}
        style={{
          position: 'fixed',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '18px',
          width: '50%',
          zIndex: 1,
        }}
      />

      <button
        onClick={() => setShowToggles(!showToggles)}
        style={{
          position: 'fixed',
          top: '50px',
          left: '60%',
          padding: '5px',
          fontSize: '18px',
          zIndex: 1,
        }}
      >
        Daily Commutes
      </button>

      <button
        onClick={() => setShowToggles2(!showToggles2)}
        style={{
          position: 'fixed',
          top: '50px',
          left: '20%',
          transform: 'translateX(-50%)',
          padding: '5px',
          fontSize: '18px',
          zIndex: 1,
        }}
      >
        Filters & Overlays
      </button>

      <button
        onClick={() => setShowToggles3(!showToggles3)}
        style={{
          position: 'fixed',
          top: '85px',
          left: '49%',
          transform: 'translateX(-50%)',
          padding: '5px',
          fontSize: '18px',
          zIndex: 1,
        }}
      >
        Map Area Stats
      </button>

      {showToggles && (
        <>
          <FormGroup
            style={{
              position: 'fixed',
              top: '120px',
              left: '55%',
              transform: 'translateX(-50%)',
              fontSize: '16px',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(247,247,247,255)',
              padding: '10px',
              width: '110%',
            }}
          >
            <div className="formControlContainer">
              <FormControlLabel
                control={<Switch defaultChecked size="large" />}
                label={
                  <>
                    <img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />
                  </>
                }
              />
            </div>
            <div className="formControlContainer">
              <FormControlLabel
                control={<Switch defaultChecked size="large" />}
                label={
                  <>
                    <img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />
                  </>
                }
              />
            </div>
            <div className="formControlContainer">
              <FormControlLabel
                control={<Switch defaultChecked size="large" />}
                label={
                  <>
                    <img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />
                  </>
                }
              />
            </div>
          </FormGroup>
        </>
      )}

      {showToggles2 && (
        <>
          <FormGroup
            style={{
              position: 'fixed',
              top: '120px',
              left: '55%',
              transform: 'translateX(-50%)',
              fontSize: '16px',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(247,247,247,255)',
              padding: '10px',
              width: '110%',
            }}
          >
            <div className="formControlContainer">
              <div>
                <img src={icons2} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />
              </div>
            </div>
            <FormGroup>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={condoToggle} onChange={handleCondoToggle} />}
                          label="Condo"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={singleFamilyToggle} onChange={handleSingleFamilyToggle} />}
                          label="Single Family"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={multiFamilyToggle} onChange={handleMultiFamilyToggle} />}
                          label="2-4 Multifamily"
                        />
                      </FormGroup>
                    </div>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={politicalToggle} onChange={handlePoliticalToggle} />}
                          label="Political"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={demographicToggle} onChange={handleDemographicToggle} />}
                          label="Demographic"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={publicProjectsToggle} onChange={handlePublicProjectsToggle} />}
                          label="Public projects"
                        />
                      </FormGroup>
                    </div>
                    <div style={{ display: 'flex' }}>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={whatHappened2008Toggle} onChange={handleWhatHappened2008Toggle} />}
                          label="What happened in 2008"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={yearYearAppreciationToggle} onChange={handleYearYearAppreciationToggle} />}
                          label="Year/Year Appreciation"
                        />
                      </FormGroup>
                    </div>
                  </div>
                </div>
              </div>
            </FormGroup>
          </FormGroup>
        </>
      )}

      {showToggles3 && (
        <>
          <FormGroup
            style={{
              position: 'fixed',
              top: '120px',
              left: '55%',
              transform: 'translateX(-50%)',
              fontSize: '16px',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(247,247,247,255)',
              padding: '10px',
              width: '110%',
            }}
          >
            <div className="formControlContainer">
              <div>
                <RandomNumberDisplay imageSrc={icons3} altText="Bike" />
              </div>
            </div>
          </FormGroup>
        </>
      )}

      <Background />
    </div>
  );
};

export default Core;
