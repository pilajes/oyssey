import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import house1 from '../static/house1.webp'; // Sample house images
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import MapIcon from '@mui/icons-material/Map'; // Import MapIcon for the Map View

const ListingOne = () => {
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
          navigate('/upcomingtours');
          break;
        default:
          break;
      }
    };
  const listing = {
    id: 1,
    image: house1, // Placeholder for the image
    bedCount: 3,
    bathCount: 2,
    type: 'Single Family',
    address: '1234 Main St, San Francisco, CA',
    price: '$1,200,000',
    squareFootage: '2,000 sqft',
    daysOnMarket: 14,
    realtyAgency: 'ABC Realty',
    contactNumber: '123-456-7890',
  };

  // Sample data for additional cards
  const crossPlatformVisibility = {
    overallScore: '89 / 100',
    visibility: 'Highly Visible',
    zillow: {
      views: '2,437 Views',
      saves: '611 Saves',
      rank: 'Top 20% on Zillow.com',
    },
    homes: {
      views: '1,844 Views',
      rank: 'Top 35% on Homes.com',
    },
    metaPlatforms: '30+ Postings on Meta Platforms (Top 50% Measured)',
  };

  const subMarketFundamentals = {
    listPrice: '$1.45M',
    salePrice: '$1.35M',
    daysOnMarket: '51 Days On',
    listValueCapture: '93% Average List Value Capture',
    appreciation: '1% Avg YoY Appreciation',
    spaceComparison: '50% More Beds, Baths, and Space Than Average',
  };

  const listingAgentBehavior = {
    listPrice: '$1.2M',
    salePrice: '$1.1M',
    daysOnMarket: '32 Days On',
    listValueCapture: '91% List Value Capture',
    speedToSale: '63% Faster than Average to Sale',
    priceReduction: '~24 Days Price Reduction',
    listingDrop: '~67 Days Listing Dropped',
  };

  return (
    <div style={{ position: 'relative' }}>
      <h1>Listing One Details</h1>
      <div key={listing.id} style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', padding: '10px' }}>
        <div style={{ position: 'relative', marginBottom: '10px' }}>
          <img src={listing.image} alt={`House ${listing.id}`} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          <Link to={`/listing/${listing.id}`} style={{ position: 'absolute', bottom: 0, right: 0 }}>
          </Link>
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
        {/* Additional Cards */}
        {/* Cross Platform Visibility */}
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>
          <h3>Cross Platform Visibility</h3>
          <p>Overall Score: {crossPlatformVisibility.overallScore} ({crossPlatformVisibility.visibility})</p>
          <p>{crossPlatformVisibility.zillow.views}, {crossPlatformVisibility.zillow.saves} ({crossPlatformVisibility.zillow.rank})</p>
          <p>{crossPlatformVisibility.homes.views} ({crossPlatformVisibility.homes.rank})</p>
          <p>{crossPlatformVisibility.metaPlatforms}</p>
        </div>
        {/* Sub-Market Fundamentals */}
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>
          <h3>Sub-Market Fundamentals</h3>
          <p>Average List Price: {subMarketFundamentals.listPrice}</p>
          <p>Average Sale Price: {subMarketFundamentals.salePrice}</p>
          <p>Days On Market: {subMarketFundamentals.daysOnMarket}</p>
          <p>{subMarketFundamentals.listValueCapture}</p>
          <p>{subMarketFundamentals.appreciation}</p>
          <p>{subMarketFundamentals.spaceComparison}</p>
        </div>
        {/* Listing Agent Behavior */}
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginTop: '20px' }}>
          <h3>Listing Agent Behavior</h3>
          <p>Average List Price: {listingAgentBehavior.listPrice}</p>
          <p>Average Sale Price: {listingAgentBehavior.salePrice}</p>
          <p>Days On Market: {listingAgentBehavior.daysOnMarket}</p>
          <p>{listingAgentBehavior.listValueCapture}</p>
          <p>{listingAgentBehavior.speedToSale}</p>
          <p>{listingAgentBehavior.priceReduction}</p>
          <p>{listingAgentBehavior.listingDrop}</p>
        </div>
      </div>
        <BottomNavigation
        value={bottomNavValue}
        onChange={handleBottomNavChange}
        showLabels
        style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f0f0f0' }}
      >
        <BottomNavigationAction label="Map View" icon={<MapIcon />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        <BottomNavigationAction label="Upcoming Tours" icon={<EventIcon />} />
      </BottomNavigation>
    </div>
  );
};

export default ListingOne;
