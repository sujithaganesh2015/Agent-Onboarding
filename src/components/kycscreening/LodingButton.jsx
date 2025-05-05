import React, { useState } from "react";

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate a request
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      className="loading-button"
      onClick={handleClick}
      disabled={isLoading}
    >
      <span className="button-text">Request Company Documents</span>
      {isLoading && (
        <div className="loader">
          <svg className="circular-loader" viewBox="25 25 50 50">
            <circle
              className="loader-path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#70c542"
              strokeWidth="2"
            />
          </svg>
          <span className="arrow">←</span>
        </div>
      )}
    </button>
  );
};

export default LoadingButton;
