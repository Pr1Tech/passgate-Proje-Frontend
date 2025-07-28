import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Settings from './pages/Settings/Settings';
import UserSearch from './pages/UserSearch/UserSearch';
import RoleSearch from './pages/RoleSearch/RoleSearch';
import GroupSearch from './pages/GroupSearch/GroupSearch';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Settings />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user-search" element={<UserSearch />} />
          <Route path="/role-search" element={<RoleSearch />} />
          <Route path="/group-search" element={<GroupSearch />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
