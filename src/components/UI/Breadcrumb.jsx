import React from 'react';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumbText = () => {
    switch(location.pathname) {
      case '/settings':
        return 'Ayarlar';
      case '/user-search':
        return 'Kullanıcı Arama';
      case '/role-search':
        return 'Rol Arama';
      case '/group-search':
        return 'Grup Arama';
      default:
        return 'Ayarlar';
    }
  };

  return (
    <div className="el-breadcrumb">
      <span className="el-breadcrumb__item">
        <span className="el-breadcrumb__inner is-link">
          {getBreadcrumbText()}
        </span>
        <span className="el-breadcrumb__separator">/</span>
      </span>
    </div>
  );
};

export default Breadcrumb;