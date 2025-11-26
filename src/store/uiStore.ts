import { create } from 'zustand';

interface UIState {
  loading: boolean;
  language: 'en' | 'de' | 'es' | 'pt';
  setLoading: (loading: boolean) => void;
  setLanguage: (language: 'en' | 'de' | 'es' | 'pt') => void;
}

export const useUIStore = create<UIState>((set) => ({
  loading: false,
  language: 'en',
  
  setLoading: (loading) => set({ loading }),
  setLanguage: (language) => set({ language })
}));