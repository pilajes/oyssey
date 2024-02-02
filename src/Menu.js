import React, { useState, useEffect } from 'react';
//import './Menu.css'; // Assuming you have a CSS file for styling

const Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);
  const [isWeb, setIsWeb] = useState(window.innerWidth > 768); // Assuming a breakpoint of 768px for web

  useEffect(() => {
    const handleResize = () => {
      setIsWeb(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleTouch = () => {
    if (!isWeb) {
      setMenuVisible(!isMenuVisible);
    }
  };

  return (
    <div className={`menu ${isMenuVisible ? 'visible' : 'hidden'}`} onTouchStart={handleTouch}>
      {isWeb && (
        <button className="toggle-button" onClick={handleToggleMenu}>
          Toggle Views
        </button>
      )}
      {/* Your menu content goes here */}
    </div>
  );
};

export default Menu;
