
import React, { useState } from 'react';
import { OpportunityStatus } from '../types';
import { COLORS } from '../constants';
import { useNavigate } from 'react-router-dom';

const OpportunityList: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');

  const opportunities = [
    { id: '1', name: '青岛XX科技有限公司', type: '高新技术企业', status: OpportunityStatus.PENDING, time: '2024-10-20' },
    { id: '2', name: '日照某进出口贸易公司', type: '外贸企业', status: OpportunityStatus.CONTACTED, time: '2024-10-21' },
    { id: '3', name: '山东新材料研发中心', type: '专精特新', status: OpportunityStatus.PROGRESSING, time: '2024-10-22' },
    { id: '4', name: '五莲机械制造有限公司', type: '传统制造', status: OpportunityStatus.CONVERTED, time: '2024-10-18' },
  ];

  const tabs = [
    { label: '全部', value: 'all' },
    { label: '未触达', value: OpportunityStatus.PENDING },
    { label: '跟进中', value: OpportunityStatus.PROGRESSING },
  ];

  const getStatusStyle = (status: OpportunityStatus) => {
    switch (status) {
      case OpportunityStatus.PENDING: return 'bg-gray-100 text-gray-500';
      case OpportunityStatus.CONTACTED: return 'bg-blue-100 text-blue-500';
      case OpportunityStatus.PROGRESSING: return 'bg-yellow-100 text-yellow-600';
      case OpportunityStatus.CONVERTED: return 'bg-green-100 text-green-500';
      default: return '';
    }
  };

  const filtered = activeTab === 'all' 
    ? opportunities 
    : opportunities.filter(o => o.status === activeTab);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="bg-white p-4 pb-0 border-b">
        <h2 className="text-xl font-bold mb-4">商机管理</h2>
        <div className="flex gap-4 mb-2">
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-2 px-1 text-sm font-medium transition-colors border-b-2 ${activeTab === tab.value ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filtered.map(opp => (
          <div key={opp.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-gray-800 flex-1 mr-2">{opp.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusStyle(opp.status)}`}>
                {opp.status}
              </span>
            </div>
            <div className="text-xs text-gray-400 mb-4 flex gap-3">
              <span>{opp.type}</span>
              <span>•</span>
              <span>{opp.time}</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => navigate('/collection')}
                className="flex-1 py-2 rounded-lg bg-red-600 text-white text-sm font-medium active:opacity-80"
              >
                开始画像
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm active:bg-gray-50">
                标记详情
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpportunityList;
