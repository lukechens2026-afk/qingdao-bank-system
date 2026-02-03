import React from 'react';

const ProductLibrary: React.FC = () => {
  const products = [
    { id: 1, name: 'Small Business Loan', apr: '6.2%' },
    { id: 2, name: 'Working Capital', apr: '5.8%' },
    { id: 3, name: 'Equipment Financing', apr: '7.1%' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Product Library</h2>
      <div className="space-y-3">
        {products.map(p => (
          <div key={p.id} className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-sm">{p.name}</h4>
              <p className="text-[12px] text-gray-400">APR: {p.apr}</p>
            </div>
            <button className="text-sm bg-red-600 text-white px-3 py-1 rounded-full">Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLibrary;
