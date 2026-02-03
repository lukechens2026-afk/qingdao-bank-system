import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2">Welcome to Qingdao Bank</h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to continue your digital banking experience.</p>

        <div className="space-y-4">
          <input className="w-full p-3 rounded-lg border border-gray-200" placeholder="Username" />
          <input className="w-full p-3 rounded-lg border border-gray-200" placeholder="Password" type="password" />

          <button onClick={() => navigate('/home')} className="w-full bg-red-600 text-white py-3 rounded-lg font-bold">Sign In</button>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
          <span>Forgot password?</span>
          <span>Need help?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
