import React from 'react';

const OpportunityList: React.FC = () => {
  const items = new Array(6).fill(0).map((_, i) => ({
    id: i + 1,
    name: `Opportunity ${i + 1}`,
    value: `${(Math.random() * 100).toFixed(0)}K`,
    status: i % 3 === 0 ? 'New' : i % 3 === 1 ? 'In Progress' : 'Closed'
  }));

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Opportunities</h2>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-sm">{item.name}</h4>
              <p className="text-[12px] text-gray-400">Value: {item.value}</p>
            </div>
            <div className="text-xs text-gray-500">{item.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
