import type { Project } from '../types/project.types';
import type { Turbine } from '../types/turbine.types';

interface ProjectState {
  projects: Project[];
  selectedProject: Project | null;
  turbines: Turbine[];
  selectedTurbine: Turbine | null;
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project | null) => void;
  setTurbines: (turbines: Turbine[]) => void;
  setSelectedTurbine: (turbine: Turbine | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  selectedProject: null,
  turbines: [],
  selectedTurbine: null,
  
  setProjects: (projects) => set({ projects }),
  setSelectedProject: (selectedProject) => set({ selectedProject }),
  setTurbines: (turbines) => set({ turbines }),
  setSelectedTurbine: (selectedTurbine) => set({ selectedTurbine })
}));

// src/store/uiStore.ts
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