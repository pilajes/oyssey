import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component
import house1 from '../static/house1.webp'; // Sample house images
import house2 from '../static/house2.webp';
import house3 from '../static/house3.webp';
import { AccessTime, Add } from '@mui/icons-material'; // Import AccessTime and Add icons
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map'; // Import MapIcon for the Map View

const UpcomingTours = () => {
    const [bottomNavValue, setBottomNavValue] = useState(-1);
    const navigate = useNavigate();
  
    const handleBottomNavChange = (event, newValue) => {
      setBottomNavValue(newValue);
      switch (newValue) {
        case 0:
          navigate('/core');
          break;
        case 1:
          navigate('/profile');
          break;
        case 2:
          navigate('/listview');
          break;
        default:
          break;
      }
    };
  

  const listings = [
    {
      id: 1,
      image: house1,
      bedCount: 3,
      bathCount: 2,
      type: 'Single Family',
      address: '1234 Main St, San Francisco, CA',
      price: '$1,200,000',
      squareFootage: '2,000 sqft',
      daysOnMarket: 14,
      realtyAgency: 'ABC Realty',
      contactNumber: '123-456-7890',
      tourTime: 'Sunday @ 4pm', // Tour time for listing 1
    },
    {
      id: 2,
      image: house2,
      bedCount: 4,
      bathCount: 3,
      type: 'Condo',
      address: '5678 Elm St, San Francisco, CA',
      price: '$900,000',
      squareFootage: '1,500 sqft',
      daysOnMarket: 7,
      realtyAgency: 'XYZ Realty',
      contactNumber: '987-654-3210',
      tourTime: 'Monday @ 3pm', // Tour time for listing 2
    },
    {
      id: 3,
      image: house3,
      bedCount: 2,
      bathCount: 1,
      type: '2-4 Multifamily',
      address: '9101 Oak St, San Francisco, CA',
      price: '$1,500,000',
      squareFootage: '2,500 sqft',
      daysOnMarket: 21,
      realtyAgency: 'DEF Realty',
      contactNumber: '456-789-0123',
      tourTime: 'Tuesday @ 5pm', // Tour time for listing 3
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <h1>Upcoming Tours</h1>
      {listings.map((listing) => (
        <div key={listing.id} style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', padding: '10px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, background: 'white', padding: '5px', borderRadius: '5px', zIndex: 1 }}>
            <span>{listing.tourTime}</span>
            <span style={{ marginLeft: '5px', verticalAlign: 'middle' }}><Add /></span> {/* Plus icon indicating signing up for the tour */}
          </div>
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <img src={listing.image} alt={`House ${listing.id}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>
          <h2 style={{ marginBottom: '10px' }}>{listing.price}</h2>
          <div>
            <span>Bedrooms: {listing.bedCount}</span>
            <br />
            <span>Bathrooms: {listing.bathCount}</span>
            <br />
            <span>Type: {listing.type}</span>
            <br />
            <span>Days on Market: {listing.daysOnMarket}</span>
            <br />
            <span>Address: {listing.address}</span>
            <br />
            <span>Realty Agency: {listing.realtyAgency}</span>
            <br />
            <span>Contact Number: {listing.contactNumber}</span>
          </div>
        </div>
      ))}
      <BottomNavigation
        value={bottomNavValue}
        onChange={handleBottomNavChange}
        showLabels
        style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0' }}
      >
        <BottomNavigationAction label="Map" icon={<MapIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="List View" icon={<ListAltIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default UpcomingTours;
