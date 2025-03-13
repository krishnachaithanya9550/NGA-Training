// DelayComponent.js
import React, { useEffect, useState } from 'react';

const DelayComponent = ({ onDelayComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the delay of 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
      onDelayComplete(); // Trigger the callback when the delay is complete
    }, 5000);

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, [onDelayComplete]);

  return (
    <div>
      {loading ? (
        <p>Loading your data...</p>
      ) : (
        <p>Data loaded!</p>
      )}
    </div>
  );
};

export default DelayComponent;
