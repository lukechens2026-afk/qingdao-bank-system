
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { COLORS, ICONS } from './constants.tsx';
import Login from './views/Login.tsx';
import Home from './views/Home.tsx';
import OpportunityList from './views/OpportunityList.tsx';
import CollectionWizard from './views/CollectionWizard.tsx';
import ProductLibrary from './views/ProductLibrary.tsx';
import ReportView from './views/ReportView.tsx';
import Me from './views/Me.tsx';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/report';

  const tabs = [
    { name: '首页', path: '/home', icon: ICONS.Home },
    { name: '商机', path: '/opportunities', icon: ICONS.Opportunity },
    { name: '画像', path: '/collection', icon: ICONS.Collection },
    { name: '产品', path: '/products', icon: ICONS.Product },
    { name: '我的', path: '/me', icon: ICONS.User },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
      {!hideNav && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center py-2 px-1 safe-area-bottom z-50">
          {tabs.map((tab) => (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center flex-1 transition-colors"
              style={{ color: location.pathname.startsWith(tab.path) ? COLORS.primary : COLORS.textSub }}
            >
              <tab.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{tab.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/opportunities" element={<OpportunityList />} />
          <Route path="/collection" element={<CollectionWizard />} />
          <Route path="/products" element={<ProductLibrary />} />
          <Route path="/report" element={<ReportView />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
