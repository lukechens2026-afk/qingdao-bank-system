import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, ICONS } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  const stats = [
    { label: '我的商机', value: '12', color: 'text-red-600' },
    { label: '画像完成', value: '08', color: 'text-gray-800' },
    { label: '预授信额', value: '4.5M', color: 'text-gray-800' },
  ];

  const quickActions = [
    { name: '商机池', icon: ICONS.Opportunity, color: 'bg-red-50', iconColor: '#E60012', path: '/opportunities' },
    { name: '画像采集', icon: ICONS.Collection, color: 'bg-orange-50', iconColor: '#F2994A', path: '/collection' },
    { name: '产品手册', icon: ICONS.Product, color: 'bg-blue-50', iconColor: '#2F80ED', path: '/products' },
  ];

  return (
    <div className="pb-10">
      {/* Top Header */}
      <div className="bg-red-600 pt-14 pb-10 px-6 rounded-b-[40px] shadow-lg shadow-red-100">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/30">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
            </div>
            <div className="text-white">
              <p className="text-xs opacity-70">日照分行 · 普惠金融部</p>
              <h2 className="text-lg font-bold">张三经理，早安！</h2>
            </div>
          </div>
          <button className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
             <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeWidth="2" /></svg>
             <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></span>
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl flex justify-between items-center">
            {stats.map((s, i) => (
                <div key={i} className="text-center">
                    <p className="text-[10px] text-gray-400 mb-1 font-bold">{s.label}</p>
                    <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="px-6 -mt-6">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50 grid grid-cols-3 gap-4">
            {quickActions.map((action, idx) => (
                <button 
                  key={idx} 
                  onClick={() => navigate(action.path)}
                  className="flex flex-col items-center gap-2 group"
                >
                    <div className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-active:scale-90`}>
                        <action.icon className="w-7 h-7" style={{ color: action.iconColor }} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-600">{action.name}</span>
                </button>
            ))}
          </div>
      </div>

      {/* Task List */}
      <div className="px-6 mt-8 space-y-4">
        <div className="flex justify-between items-end">
            <h3 className="text-lg font-bold text-gray-800">待办任务</h3>
            <span className="text-xs text-red-600 font-bold">查看全部</span>
        </div>
        
        <div className="space-y-3">
            {[
                { title: '完成XX新材料现场画像', time: '今天 14:00', type: '画像', priority: '高' },
                { title: '日照机械厂贷后回访', time: '明天 10:30', type: '跟进', priority: '中' },
            ].map((task, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
                    <div className={`w-2 h-10 rounded-full ${task.priority === '高' ? 'bg-red-500' : 'bg-orange-400'}`} />
                    <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-800">{task.title}</h4>
                        <p className="text-[10px] text-gray-400 mt-1">{task.time} · {task.type}</p>
                    </div>
                    <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7" strokeWidth="3"/></svg>
                    </button>
                </div>
            ))}
        </div>
      </div>

      {/* Insight Section */}
      <div className="px-6 mt-8">
         <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
                <h4 className="text-sm font-bold opacity-80 mb-1">智能内参</h4>
                <p className="text-lg font-bold mb-4">当前日照区域港口贸易类<br/>客户活跃度上升15%</p>
                <button className="bg-red-600 text-xs px-4 py-2 rounded-full font-bold">查看商机挖掘</button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
                 <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;
