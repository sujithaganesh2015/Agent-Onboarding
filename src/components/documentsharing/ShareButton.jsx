import React from "react";
import { FiShare2 } from "react-icons/fi";

const ShareButton = () => {
  const handleShare = () => {
    console.log("Share button clicked!");
  };

  return (
    <div className="flex justify-center mb-10">
      <button
        className="share-button flex items-center justify-between w-64 px-6 py-2 bg-gray-100 rounded-lg cursor-pointer text-gray-800"
        onClick={handleShare}
      >
        <span>Share Company Details</span>
        <FiShare2 className="share-icon text-xl" />
      </button>
    </div>
  );
};

export default ShareButton;
