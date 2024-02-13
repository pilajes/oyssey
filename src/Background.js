// import './DraggableMap.css';
import React, { useEffect } from 'react';

const DraggableImage = ({ imageUrl }) => {
  useEffect(() => {
    let _startX = 0,
        _startY = 0,
        _scrollTop = 0,
        _scrollLeft = 0;

    const handleMouseDown = (event) => {
      document.onmousemove = handleMouseMove;
      _startX = event.clientX;
      _startY = event.clientY;
      _scrollTop = document.documentElement.scrollTop;
      _scrollLeft = document.documentElement.scrollLeft;
    };

    const handleMouseMove = (event) => {
      window.scrollTo({
        left: _scrollLeft + (_startX - event.clientX),
        top: _scrollTop + (_startY - event.clientY),
      });
    };

    const handleMouseUp = () => {
      document.onmousemove = null;
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div id="wrapper">
      <div id="dragable_content">
        <img
          draggable="false"
          src={imageUrl}
          style={{ height: '100rem' }}
          alt="World Map"
        />
      </div>
    </div>
  );
};

export default DraggableImage;
