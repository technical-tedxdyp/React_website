import React from 'react';

const CallToActionButton = ({ children, className = "" }) => {
  return (
    <div className={`w-40 max-w-full font-semibold text-center text-white ${className}`}>
      <button className="overflow-hidden px-4 py-3.5 bg-red-600 border-2 border-white border-solid rounded-[64px] max-md:px-5 w-full">
        {children}
      </button>
    </div>
  );
};

export default CallToActionButton;
