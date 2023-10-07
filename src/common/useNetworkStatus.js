import { useEffect, useState } from "react";

const useNetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setNetworkStatus(false);
    });
    window.addEventListener("online", () => {
      setNetworkStatus(true);
    });
  });
  return networkStatus;
};

export default useNetworkStatus;
