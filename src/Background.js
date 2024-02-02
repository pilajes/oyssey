//import './DraggableMap.css';
import backgroundImage from './static/map.jpeg';

import React, { useEffect } from 'react';

const DraggableImage = () => {
  useEffect(() => {
    // JavaScript logic
    let _startX = 0,
        _startY = 0,
        _scrollTop = 0,
        _scrollLeft = 0;

    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;

    function OnMouseDown(event) {
      document.onmousemove = OnMouseMove;
      _startX = event.clientX;
      _startY = event.clientY;
      _scrollTop = document.documentElement.scrollTop;
      _scrollLeft = document.documentElement.scrollLeft;
    }

    function OnMouseMove(event) {
      window.scrollTo({
          left: _scrollLeft + (_startX - event.clientX),
          top: _scrollTop + (_startY - event.clientY)
      });
    }

    function OnMouseUp() {
      document.onmousemove = null;
    }

    return () => {
      // Clean up code (optional)
      document.onmousedown = null;
      document.onmouseup = null;
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div id="wrapper">
      <div id="dragable_content">
        <img
          draggable="false"
          src={'https://griotstorage.blob.core.windows.net/images/Screenshot 2024-01-17 at 5.43.38 PM.jpeg'}
          style={{ height: '100rem' }}
          alt="World Map"
        />
      </div>
    </div>
  );
};

export default DraggableImage;

