import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  UserIcon, 
  KeyIcon, 
  UsersIcon, 
  SettingsIcon 
} from '../Icons/Icons';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      key: 'user-search',
      icon: <UserIcon />,
      title: 'Kullanıcı Arama',
      path: '/user-search'
    },
    {
      key: 'role-search',
      icon: <KeyIcon />,
      title: 'Rol Arama',
      path: '/role-search'
    },
    {
      key: 'group-search',
      icon: <UsersIcon />,
      title: 'Grup Arama',
      path: '/group-search'
    },
    {
      key: 'settings',
      icon: <SettingsIcon />,
      title: 'Ayarlar',
      path: '/settings'
    }
  ];

  return (
    <aside className="el-aside">
      <ul className="el-menu el-menu--vertical el-menu--collapse">
        {menuItems.map(item => (
          <li
            key={item.key}
            className={`el-menu-item ${location.pathname === item.path ? 'is-active' : ''}`}
            title={item.title}
            onClick={() => navigate(item.path)}
          >
            <i className="el-icon">
              {item.icon}
            </i>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;