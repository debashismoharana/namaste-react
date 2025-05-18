import { useState, useEffect } from "react";

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);

  window.addEventListener("offline", () => {
    setNetworkStatus(false);
  });
  window.addEventListener("online", () => {
    setNetworkStatus(true);
  });

  return networkStatus;
};

export default useNetworkStatus;
