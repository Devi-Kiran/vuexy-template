import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { Maximize, Minimize } from 'react-feather';

const FullscreenButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    // setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    // Add event listeners for fullscreenchange
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    // Clean up event listeners when component is unmounted
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isFullscreen]);

  return (
    
    <Button.Ripple color="flat-secondary"
            style={{ padding: "5px", margin: "0px 2px" }} onClick={handleFullscreenToggle}>
            {isFullscreen ? <Minimize size="20"/> : <Maximize size="20"/>}
        </Button.Ripple>
  );
};

export default FullscreenButton;
