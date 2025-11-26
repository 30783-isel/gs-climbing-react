import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

// Pages
import { Login } from '../pages/Login/Login';
import Administrator from '../pages/Administrator/Administrator';
import  Technician  from '../pages/Technician/Technician';
import ShowTurbines from '../pages/ShowTurbines/ShowTurbines';
import Historic from '../pages/Administrator/Historic/Historic';
import { Header } from '../components/common/Header/Header';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<><Header /><Outlet /></>}>
            
            {/* Admin routes */}
            <Route element={<PrivateRoute allowedRoles={['ADMIN']} />}>
              <Route path="/administrator" element={<Administrator />} />
              <Route path="/historic/:id" element={<Historic />} />
            </Route>
            
            {/* Technician routes */}
            <Route element={<PrivateRoute allowedRoles={['TECH']} />}>
              <Route path="/technician" element={<Technician />} />
            </Route>
            
            {/* Common routes */}
            <Route path="/show-turbines/:id" element={<ShowTurbines />} />
            
          </Route>
        </Route>
        
        {/* 404 */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
