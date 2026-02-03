
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants';

const Login: React.FC = () => {
  const navigate = useNavigate();
  // 预置演示工号和密码
  const [userId, setUserId] = useState('QD8888');
  const [password, setPassword] = useState('Bank2024');
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(true);

  const handleLogin = () => {
    setLoading(true);
    // 模拟真实登录延迟
    setTimeout(() => {
      setLoading(false);
      navigate('/home');
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white px-8 pt-24">
      <div className="mb-16">
        <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-red-100">
           <span className="text-white text-3xl font-bold">青</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">青岛银行</h1>
        <h2 className="text-lg text-gray-400 font-medium">数字化触客移动工作台</h2>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Employee ID / 工号</label>
          <input
            type="text"
            className="w-full border-b-2 border-gray-100 py-3 text-lg outline-none focus:border-red-500 transition-colors font-medium"
            placeholder="请输入工号"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className="relative">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Password / 密码</label>
          <input
            type="password"
            className="w-full border-b-2 border-gray-100 py-3 text-lg outline-none focus:border-red-500 transition-colors font-medium"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center text-gray-500">
            <input 
              type="checkbox" 
              checked={remember} 
              onChange={() => setRemember(!remember)}
              className="mr-2 accent-red-600 w-4 h-4" 
            />
            记住密码
          </label>
          <span className="text-red-600 font-medium">忘记密码？</span>
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-4 rounded-2xl font-bold text-white shadow-xl shadow-red-100 transition-all active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
          style={{ backgroundColor: COLORS.primary, opacity: loading ? 0.8 : 1 }}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : '立即登录'}
        </button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400">还没有账号？ <span className="text-red-600 font-bold">申请注册</span></p>
      </div>

      <div className="mt-auto pb-10 flex flex-col items-center gap-2">
        <div className="flex gap-4 opacity-30">
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">指纹</div>
            <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center">面部</div>
        </div>
        <p className="text-[10px] text-gray-300">© 2024 Bank of Qingdao. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Login;
