import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { authAPI } from '../api/auth.api';
import type { LoginCredentials } from '../types/auth.types';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const navigate = useNavigate();
  const { login, logout, isAuthenticated, user, role } = useAuthStore();

  const handleLogin = async (credentials: LoginCredentials) => {
    try {
      // Armazenar senha temporariamente para Basic Auth
      sessionStorage.setItem('userPassword', credentials.password);
      
      await authAPI.login(credentials);
      const roleData = await authAPI.getRole();
      
      const userData = {
        username: credentials.username,
        idUser: '',
        name: '',
        email: '',
        active: 'true',
        roles: roleData.message
      };
      
      login(userData, roleData.message);
      
      if (roleData.message === 'ADMIN') {
        navigate('/administrator');
      } else {
        navigate('/technician');
      }
      
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Invalid credentials');
      throw error;
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
    toast.success('Logout successful!');
  };

  return {
    handleLogin,
    handleLogout,
    isAuthenticated,
    user,
    role
  };
};
