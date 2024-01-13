import React, { useState, useEffect } from "react";
import Router from "./router/Router";
import OfflineConponent from "./@core/components/ametecs/OfflineConponent";

const App = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return <>{isOnline ? <Router /> : <OfflineConponent />}</>;
};

export default App;
