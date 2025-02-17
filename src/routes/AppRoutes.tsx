import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';  // Import ProtectedRoute
import LoginScreen from '../pages/Login';
import Home from '../pages/SetupPage';
import FormPage from '../components/ProfileInfo';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<LoginScreen />} />
      {/* <Route path="/logout" element={<Logout />} /> */}

      {/* Protected Routes */}
      <Route path="/setup-page" element={<ProtectedRoute><Home /></ProtectedRoute>} />

      <Route path="/form" element={<ProtectedRoute><FormPage/></ProtectedRoute>} />

      {/* Redirect unknown routes */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
