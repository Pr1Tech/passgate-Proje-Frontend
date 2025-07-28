import React, { useState } from 'react';
import { ChevronDownIcon } from '../Icons/Icons';

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    // Logout functionality
    console.log('Logging out...');
  };

  return (
    <div className="el-dropdown userProfile">
      <div 
        className="el-row el-tooltip__trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="el-col el-col-20 el-col-offset-2">
          <div className="userName">{user.name}</div>
          <div className="userGroup">{user.role}</div>
        </div>
        <div className="el-col el-col-2">
          <ChevronDownIcon />
        </div>
      </div>
      {isOpen && (
        <div className="el-dropdown-menu">
          <ul>
            <li onClick={handleLogout}>Log out</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;