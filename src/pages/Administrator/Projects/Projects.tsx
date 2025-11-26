import React, { useState } from 'react';
import { useProjects } from '../../../hooks/useProjects';
import { useAuthStore } from '../../../store/authStore';
import { useTranslation } from 'react-i18next';
import {
  Container,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions
} from '@mui/material';
import { Add, Search, Delete, Edit, Visibility } from '@mui/icons-material';
import type { Project } from '../../../types/project.types';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuthStore();
  const { projects, loading, createProject, deleteProject, filterProjects } = useProjects(user?.idUser);
  
  const [openDialog, setOpenDialog] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [formData, setFormData] = useState<Partial<Project>>({
    name: '',
    country: '',
    location: '',
    numberTurbines: '',
    site: '',
    number: '',
    type: ''
  });
  const [searchData, setSearchData] = useState<Partial<Project>>({});

  const handleInputChange = (field: keyof Project, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSearchChange = (field: keyof Project, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (formData.name) {
      await createProject(formData as Project);
      setOpenDialog(false);
      setFormData({
        name: '',
        country: '',
        location: '',
        numberTurbines: '',
        site: '',
        number: '',
        type: ''
      });
    }
  };

  const handleSearch = async () => {
    await filterProjects(searchData);
  };

  const handleDelete = async (name: string) => {
    if (window.confirm(t('GSCLIMBING.CONFIRM_DELETE'))) {
      await deleteProject(name);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => setOpenDialog(true)}
        >
          {t('GSCLIMBING.INSERT_PROJECT')}
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<Search />}
          onClick={() => setShowSearch(!showSearch)}
        >
          {t('GSCLIMBING.SEARCH')}
        </Button>
      </Box>

      {showSearch && (
        <Paper sx={{ p: 2, mb: 3 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              label={t('GSCLIMBING.NAME')}
              value={searchData.name || ''}
              onChange={(e) => handleSearchChange('name', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.COUNTRY')}
              value={searchData.country || ''}
              onChange={(e) => handleSearchChange('country', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.LOCATION')}
              value={searchData.location || ''}
              onChange={(e) => handleSearchChange('location', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.SITE')}
              value={searchData.site || ''}
              onChange={(e) => handleSearchChange('site', e.target.value)}
            />
          </Box>
          <Button 
            variant="contained" 
            sx={{ mt: 2 }}
            onClick={handleSearch}
          >
            {t('GSCLIMBING.FILTER')}
          </Button>
        </Paper>
      )}

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('GSCLIMBING.NAME')}</TableCell>
              <TableCell>{t('GSCLIMBING.NUMBER_TURBINES')}</TableCell>
              <TableCell align="right">{t('GSCLIMBING.OPTIONS')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  {t('GSCLIMBING.LOADING')}...
                </TableCell>
              </TableRow>
            ) : (
              projects.map((project) => (
                <TableRow key={project.idProject}>
                  <TableCell>{project.name}</TableCell>
                  <TableCell>{project.numberTurbines}</TableCell>
                  <TableCell align="right">
                    <IconButton size="small">
                      <Visibility />
                    </IconButton>
                    <IconButton size="small">
                      <Edit />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      onClick={() => handleDelete(project.name)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dialog Add Project */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
        <DialogTitle>{t('GSCLIMBING.INSERT_PROJECT')}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
            <TextField
              label={t('GSCLIMBING.NAME')}
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
            <TextField
              label={t('GSCLIMBING.COUNTRY')}
              value={formData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.LOCATION')}
              value={formData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.NUMBER_TURBINES')}
              value={formData.numberTurbines}
              onChange={(e) => handleInputChange('numberTurbines', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.SITE')}
              value={formData.site}
              onChange={(e) => handleInputChange('site', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.NUMBER')}
              value={formData.number}
              onChange={(e) => handleInputChange('number', e.target.value)}
            />
            <TextField
              label={t('GSCLIMBING.TYPE')}
              value={formData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>
            {t('GSCLIMBING.CLOSE')}
          </Button>
          <Button onClick={handleSubmit} variant="contained">
            {t('GSCLIMBING.ADD')}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};