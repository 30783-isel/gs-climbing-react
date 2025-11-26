import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '../types/user.types';

interface AuthState {
  user: User | null;
  role: 'ADMIN' | 'TECH' | null;
  isAuthenticated: boolean;
  login: (user: User, role: 'ADMIN' | 'TECH') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      role: null,
      isAuthenticated: false,
      
      login: (user, role) => {
        sessionStorage.setItem('authenticatedUser', user.username);
        sessionStorage.setItem('roleUser', role);
        set({ user, role, isAuthenticated: true });
      },
      
      logout: () => {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('userPassword');
        sessionStorage.removeItem('roleUser');
        set({ user: null, role: null, isAuthenticated: false });
      }
    }),
    {
      name: 'auth-storage'
    }
  )
);