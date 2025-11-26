import api from '../utils/http-interceptor';
import { API_CONFIG } from '../utils/constants';
import type { Project } from '../types/project.types';

export const projectsAPI = {
  getAll: async () => {
    const response = await api.get(API_CONFIG.baseProjectsUrl + 'all');
    return response.data;
  },

  getByUserId: async (userId: string) => {
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}projects-by-user/${userId}`);
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}project-by-id/${id}`);
    return response.data;
  },

  create: async (project: Project) => {
    const response = await api.post(API_CONFIG.baseProjectsUrl + 'create', project);
    return response.data;
  },

  delete: async (name: string) => {
    const response = await api.delete(`${API_CONFIG.baseProjectsUrl}delete/${name}`);
    return response.data;
  },

  filter: async (project: Partial<Project>) => {
    const response = await api.post(API_CONFIG.baseProjectsUrl + 'search', project);
    return response.data;
  },

  getTurbines: async (projectId: string) => {
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}turbines/${projectId}`);
    return response.data;
  },

  getTurbineById: async (id: string) => {
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}turbine-by-id/${id}`);
    return response.data;
  },

  addTurbine: async (projectName: string) => {
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}add-turbine/${projectName}`);
    return response.data;
  },

  updateTurbine: async (formData: FormData) => {
    const response = await api.post(API_CONFIG.baseProjectsUrl + 'update-turbine', formData);
    return response.data;
  },

  updateTurbineName: async (formData: FormData) => {
    const response = await api.post(API_CONFIG.baseProjectsUrl + 'update-turbine-name', formData);
    return response.data;
  },

  deleteTurbine: async (id: string) => {
    const response = await api.delete(`${API_CONFIG.baseProjectsUrl}delete-turbine/${id}`);
    return response.data;
  },

  updateUsersProject: async (idProject: string, users: string) => {
    const usersParam = !users || users.length === 0 ? '000' : users;
    const response = await api.get(`${API_CONFIG.baseProjectsUrl}update-users-project/${idProject}/${usersParam}`);
    return response.data;
  }
};