import React from 'react';

const Me: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Profile</h2>
      <div className="bg-white p-4 rounded-2xl shadow-sm">
        <p className="text-sm text-gray-600">Manager: Zhang San</p>
        <p className="text-sm text-gray-600">Branch: Rizhao Sub-branch</p>
      </div>
    </div>
  );
};

export default Me;
