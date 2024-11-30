import React from 'react'

const loading: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-medium text-gray-400">Loading, Please wait...</p>
      </div>
    );
  };

export default loading