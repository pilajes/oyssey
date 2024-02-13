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
import improvedIcons from '../static/improvedIcons.jpg'
import icons3 from '../static/icons 3.jpg';
import RandomNumberDisplay from '../Random.js';
import map2 from '../static/map2.png'
import condo from '../static/condo.png'
import singleFamily from '../static/singleFamily.png'
import multiFamily from '../static/multi.png'
import publicProjects from '../static/publicProjects.png'
import demographics from '../static/demographic.png'
import political from '../static/political.png' 
import daily from '../static/dailyCommute.png'
import daily2 from '../static/dailyCommute2.png'
import daily3 from '../static/dailyCommute3.png'
import Slider from '@mui/material/Slider';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAlt';
import EventIcon from '@mui/icons-material/Event';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate} from 'react-router-dom'; // Import useHistory hook for navigation

const Core = () => {
  const [zipCode, setZipCode] = useState('');
  const [showToggles, setShowToggles] = useState(false);
  const [showToggles2, setShowToggles2] = useState(false);
  const [showToggles3, setShowToggles3] = useState(false);
  const [condoToggle, setCondoToggle] = useState(false);
  const [allListingsToggle, setAllListingsToggle] = useState(true);
  const [dailyCommuteToggle, setDailyCommuteToggle] = useState(false);
  const [dailyCommuteToggle2, setDailyCommuteToggle2] = useState(false);
  const [dailyCommuteToggle3, setDailyCommuteToggle3] = useState(false);
  const [singleFamilyToggle, setSingleFamilyToggle] = useState(false);
  const [multiFamilyToggle, setMultiFamilyToggle] = useState(false);
  const [politicalToggle, setPoliticalToggle] = useState(false);
  const [demographicToggle, setDemographicToggle] = useState(false);
  const [publicProjectsToggle, setPublicProjectsToggle] = useState(false);
  const [whatHappened2008Toggle, setWhatHappened2008Toggle] = useState(false);
  const [yearYearAppreciationToggle, setYearYearAppreciationToggle] = useState(true);

  const [bottomNavValue, setBottomNavValue] = useState(-1);
  const navigate = useNavigate();

  const handleBottomNavChange = (event, newValue) => {
    setBottomNavValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/listview'); // Navigate to ListView page
        break;
      case 1:
        navigate('/profile'); // Navigate to Profile page
        break;
      case 2:
        navigate('/upcomingtours'); // Navigate to Upcoming Tours page
        break;
      default:
        break;
    }
  };



  const handleDailyCommuteToggle = () => {
    setDailyCommuteToggle(!dailyCommuteToggle);
    if (!dailyCommuteToggle) {
      setDailyCommuteToggle2(false);
      setDailyCommuteToggle3(false);
    }
  };

  const handleDailyCommuteToggle2 = () => {
    setDailyCommuteToggle2(!dailyCommuteToggle2);
    if (!dailyCommuteToggle2) {
      setDailyCommuteToggle3(false);
    }
  };

  const handleDailyCommuteToggle3 = () => {
    setDailyCommuteToggle3(!dailyCommuteToggle3);
  };

  const handlePoliticalToggle = () => {
    setPoliticalToggle(!politicalToggle);
    setAllListingsToggle(false);
    setYearYearAppreciationToggle(false);
    setCondoToggle(false);
    setSingleFamilyToggle(false);
    setMultiFamilyToggle(false);
    setDemographicToggle(false);
    setPublicProjectsToggle(false);
  }
  const handleDemographicToggle = () => {
    setDemographicToggle(!demographicToggle);
    setAllListingsToggle(false);
    setYearYearAppreciationToggle(false);
    setCondoToggle(false);
    setSingleFamilyToggle(false);
    setMultiFamilyToggle(false);
    setPoliticalToggle(false);
    setPublicProjectsToggle(false);
  }
  const handlePublicProjectsToggle = () => {
    setPublicProjectsToggle(!publicProjectsToggle);
    setAllListingsToggle(false);
    setYearYearAppreciationToggle(false);
    setCondoToggle(false);
    setSingleFamilyToggle(false);
    setMultiFamilyToggle(false);
    setPoliticalToggle(false);
    setDemographicToggle(false);
  }
  const handleYearYearAppreciationToggle = () => setYearYearAppreciationToggle(!yearYearAppreciationToggle);

  const handleAllListingsToggle = () => {
    setAllListingsToggle(!allListingsToggle);
    setCondoToggle(false);
    setSingleFamilyToggle(false);
    setMultiFamilyToggle(false);
  };
  const handleCondoToggle = () => {
    setCondoToggle(!condoToggle);
    setAllListingsToggle(false);
    setSingleFamilyToggle(false);
    setMultiFamilyToggle(false);
  };

  const handleSingleFamilyToggle = () => {
    setSingleFamilyToggle(!singleFamilyToggle);
    setAllListingsToggle(false);
    setCondoToggle(false);
    setMultiFamilyToggle(false);
  };

  const handleMultiFamilyToggle = () => {
    setMultiFamilyToggle(!multiFamilyToggle);
    setAllListingsToggle(false);
    setCondoToggle(false);
    setSingleFamilyToggle(false);
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
        placeholder="94118"
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
          left: '84%',
          transform: 'translateX(-50%)',
          padding: '8px 16px', // Increase padding for better touch target
          fontSize: '18px',
          fontWeight: 'bold', // Bold text
          zIndex: 1,
          backgroundColor: '#fff', // White background
          color: '#000', // Black text
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          outline: 'none', // Remove focus outline
        }}
      >
        Commutes
      </button>

      <button
        onClick={() => setShowToggles2(!showToggles2)}
        style={{
          position: 'fixed',
          top: '50px',
          left: '20%',
          transform: 'translateX(-50%)',
          padding: '8px 16px', // Increase padding for better touch target
          fontSize: '18px',
          fontWeight: 'bold',
          zIndex: 1,
          backgroundColor: '#fff', // White background
          color: '#000', // Black text
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          outline: 'none', // Remove focus outline
        }}
      >
        Filters/Overlays
      </button>

      <button
        onClick={() => setShowToggles3(!showToggles3)}
        style={{
          position: 'fixed',
          top: '50px',
          left: '52%',
          transform: 'translateX(-50%)',
          padding: '8px 16px', // Increase padding for better touch target
          fontSize: '18px',
          fontWeight: 'bold', // Bold text
          zIndex: 1,
          backgroundColor: '#fff', // White background
          color: '#000', // Black text
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          outline: 'none', // Remove focus outline
        }}
      >
       Stats
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
                control={<Switch checked={dailyCommuteToggle} onChange={handleDailyCommuteToggle} size="large" />}
                label={<img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />}
              />
            </div>
            <div className="formControlContainer">
              <FormControlLabel
                control={<Switch checked={dailyCommuteToggle2 && dailyCommuteToggle} onChange={handleDailyCommuteToggle2} size="large" />}
                label={<img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />}
                disabled={!dailyCommuteToggle}
              />
            </div>
            <div className="formControlContainer">
              <FormControlLabel
                control={<Switch checked={dailyCommuteToggle3 && dailyCommuteToggle2 && dailyCommuteToggle} onChange={handleDailyCommuteToggle3} size="large" />}
                label={<img src={icons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />}
                disabled={!dailyCommuteToggle2 || !dailyCommuteToggle}
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
                <img src={improvedIcons} alt="Bike" style={{ marginRight: '5px', width: '90%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%', margin: '20px auto' }}>
            </div>
              </div>
            </div>
            <FormGroup>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', marginBottom: '10px' }}>
                    <FormGroup>
                        {/* <FormControlLabel
                          control={<Switch checked={allListingsToggle} onChange={handleAllListingsToggle} />}
                          label="All listings"
                          style={{ marginRight: '20px' }}
                        /> */}
                      </FormGroup>
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
                          control={<Switch checked={false} />}
                          label="What happened in 2008"
                          style={{ marginRight: '20px' }}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControlLabel
                          control={<Switch checked={yearYearAppreciationToggle} />}
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

      <div>
        {politicalToggle ? (
          <Background imageUrl={political} />
        ) : condoToggle ? (
          <Background imageUrl={condo} />
        ) : singleFamilyToggle ? (
          <Background imageUrl={singleFamily} />
        ) : multiFamilyToggle ? (
          <Background imageUrl={multiFamily} />
        ) : demographicToggle ? (
          <Background imageUrl={demographics} />
        ) : publicProjectsToggle ? (
          <Background imageUrl={publicProjects} />
        ) : dailyCommuteToggle ? (
          <Background imageUrl={daily} />
        ) : dailyCommuteToggle2 ? (
          <Background imageUrl={daily2} />
        ) : dailyCommuteToggle3 ? (
          <Background imageUrl={daily3} />
        ) :(
          <Background imageUrl={map2} />
        )}
      </div>
    {/* Bottom Navigation Bar */}
    <BottomNavigation value={bottomNavValue} onChange={handleBottomNavChange} showLabels style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0' }}>
      <BottomNavigationAction label="List View" icon={<ListAltIcon />} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Upcoming Tours" icon={<EventIcon />} />
    </BottomNavigation>
    </div>
  );
};

export default Core;
