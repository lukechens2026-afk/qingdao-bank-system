
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

const Me: React.FC = () => {
  const navigate = useNavigate();

  const menuGroups = [
    {
      title: '业务管理',
      items: [
        { name: '我的业绩', icon: '📈', detail: '本月已超标12%' },
        { name: '我的名片', icon: '📇', detail: '电子名片' },
        { name: '客户地图', icon: '📍', detail: '' },
      ]
    },
    {
      title: '系统设置',
      items: [
        { name: '安全中心', icon: '🛡️', detail: '设备保护中' },
        { name: '意见反馈', icon: '✍️', detail: '' },
        { name: '关于系统', icon: 'ℹ️', detail: 'v2.0.4' },
      ]
    }
  ];

  const handleLogout = () => {
    if (window.confirm('确定要退出登录吗？')) {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* 沉浸式头部 */}
      <div className="bg-red-600 pt-16 pb-20 px-6 relative overflow-hidden">
        {/* 装饰性背景 */}
        <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-[-50px] left-[-20px] w-60 h-60 bg-black/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-white p-0.5 shadow-xl">
             <img 
               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
               alt="avatar" 
               className="w-full h-full rounded-2xl bg-red-50"
             />
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold flex items-center gap-2">
              张三
              <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-normal border border-white/30">高级客户经理</span>
            </h2>
            <p className="text-sm opacity-80 mt-1">日照分行 · 普惠金融部</p>
          </div>
        </div>
      </div>

      {/* 浮动卡片 - 业绩看板 */}
      <div className="px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 flex justify-between">
           <div className="text-center">
             <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">本月授信</p>
             <p className="text-lg font-black text-gray-800">1,240<span className="text-xs font-normal ml-0.5">万</span></p>
           </div>
           <div className="w-[1px] bg-gray-100 h-10 my-auto"></div>
           <div className="text-center">
             <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">触客数</p>
             <p className="text-lg font-black text-gray-800">45<span className="text-xs font-normal ml-0.5">户</span></p>
           </div>
           <div className="w-[1px] bg-gray-100 h-10 my-auto"></div>
           <div className="text-center">
             <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">转化率</p>
             <p className="text-lg font-black text-red-600">24<span className="text-xs font-normal ml-0.5">%</span></p>
           </div>
        </div>
      </div>

      {/* 功能列表 */}
      <div className="px-6 mt-8 space-y-6">
        {menuGroups.map((group, gIdx) => (
          <div key={gIdx} className="space-y-2">
            <h3 className="text-xs font-bold text-gray-400 px-2 uppercase tracking-widest">{group.title}</h3>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {group.items.map((item, iIdx) => (
                <div 
                  key={iIdx}
                  className={`flex items-center justify-between p-4 active:bg-gray-50 transition-colors ${iIdx !== group.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-bold text-gray-700">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">{item.detail}</span>
                    <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 退出按钮 */}
        <button 
          onClick={handleLogout}
          className="w-full py-4 rounded-3xl bg-white border border-red-50 text-red-600 font-bold shadow-sm active:bg-red-50 transition-all mt-4"
        >
          退出当前账号
        </button>

        <div className="text-center pb-8">
           <p className="text-[10px] text-gray-300">青岛银行数字化系统安全加固已开启</p>
        </div>
      </div>
    </div>
  );
};

export default Me;
