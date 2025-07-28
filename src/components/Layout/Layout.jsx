import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
  const [user] = useState({
    name: 'Sencard Partners Admin',
    role: 'Yetkili Yönetici'
  });

  return (
    <div className="common-layout">
      <div className="el-container">
        <Sidebar />
        <div className="el-container is-vertical">
          <Header user={user} />
          <main className="el-main">
            {children}
          </main>
          <footer className="el-footer"></footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;