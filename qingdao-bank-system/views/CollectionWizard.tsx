import React from 'react';

const CollectionWizard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Customer Data Collection</h2>
      <p className="text-sm text-gray-500">Guide to collecting on-site customer profile information.</p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm">Step 1: Verify identity</div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Step 2: Capture contact</div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Step 3: Record business details</div>
        <div className="bg-white p-4 rounded-2xl shadow-sm">Step 4: Attach photos</div>
      </div>
    </div>
  );
};

export default CollectionWizard;
