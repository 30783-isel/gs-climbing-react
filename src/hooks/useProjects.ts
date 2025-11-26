import { useState, useEffect } from 'react';
import { useProjectStore } from '../store/projectStore';
import { projectsAPI } from '../api/projects.api';
import type { Project } from '../types/project.types';
import toast from 'react-hot-toast';

export const useProjects = (userId?: string) => {
  const { projects, setProjects } = useProjectStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const data = userId 
        ? await projectsAPI.getByUserId(userId)
        : await projectsAPI.getAll();
      setProjects(data);
    } catch (err) {
      const message = 'Failed to fetch projects';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (project: Project) => {
    try {
      await projectsAPI.create(project);
      await fetchProjects();
      toast.success('Project created successfully!');
    } catch (err) {
      toast.error('Failed to create project');
      throw err;
    }
  };

  const deleteProject = async (name: string) => {
    try {
      await projectsAPI.delete(name);
      await fetchProjects();
      toast.success('Project deleted successfully!');
    } catch (err) {
      toast.error('Failed to delete project');
      throw err;
    }
  };

  const filterProjects = async (filters: Partial<Project>) => {
    setLoading(true);
    try {
      const data = await projectsAPI.filter(filters);
      setProjects(data);
    } catch (err) {
      toast.error('Failed to filter projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [userId]);

  return {
    projects,
    loading,
    error,
    fetchProjects,
    createProject,
    deleteProject,
    filterProjects
  };
};