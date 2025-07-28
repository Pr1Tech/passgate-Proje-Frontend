import React, { useState } from 'react';
import Breadcrumb from '../UI/Breadcrumb';
import UserDropdown from '../UI/UserDropdown';

const Header = ({ user }) => {
  return (
    <header className="el-header">
      <div className="el-row header-content">
        <div className="el-col el-col-21">
          <Breadcrumb />
        </div>
        <div className="el-col el-col-3">
          <UserDropdown user={user} />
        </div>
      </div>
    </header>
  );
};

export default Header;