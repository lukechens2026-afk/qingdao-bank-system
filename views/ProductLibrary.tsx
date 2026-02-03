
import React, { useState } from 'react';
import { COLORS } from '../constants';

const ProductLibrary: React.FC = () => {
  const [search, setSearch] = useState('');
  
  const categories = ['全部', '融资类', '结算类', '理财类', '外汇类'];
  const [activeCat, setActiveCat] = useState('全部');

  const products = [
    { name: '科技易贷', type: '融资类', desc: '针对高新技术企业，审批快，利率优', label: '高新技术' },
    { name: '外贸管家', type: '外汇类', desc: '一站式外汇结算与避险工具', label: '出口型' },
    { name: '科创快贷', type: '融资类', desc: '纯信用担保，最高500万', label: '初创型' },
    { name: '利随人意', type: '理财类', desc: '分行特色理财，周期灵活', label: '高收益' },
    { name: '园区抵押贷', type: '融资类', desc: '厂房抵押，成数高', label: '重资产' },
  ];

  const filtered = products.filter(p => 
    (activeCat === '全部' || p.type === activeCat) &&
    p.name.includes(search)
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="bg-white p-4 border-b">
        <h2 className="text-xl font-bold mb-4">金融产品库</h2>
        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="搜索产品名称、优势、适用人群"
            className="w-full bg-gray-100 rounded-full py-2 px-10 text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${activeCat === cat ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filtered.map((product, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-gray-800">{product.name}</h4>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-blue-500 font-normal">{product.label}</span>
              </div>
              <p className="text-xs text-gray-400 mb-2">{product.desc}</p>
              <span className="text-[10px] text-red-600 font-medium px-2 py-0.5 bg-red-50 rounded-full">了解详情</span>
            </div>
            <div className="ml-4">
              <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center active:bg-gray-50">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductLibrary;
