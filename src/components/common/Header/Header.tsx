import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../../hooks/useAuth';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user, handleLogout } = useAuth();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/images/logo.svg" 
            alt="Logo" 
            style={{ height: 40, marginRight: 16 }} 
          />
        </Box>
        
        <Typography variant="body1" sx={{ mr: 2 }}>
          {user?.username}
        </Typography>
        
        <FormControl size="small" sx={{ mr: 2, minWidth: 80 }}>
          <Select
            value={i18n.language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            sx={{ color: 'white', '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' } }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="de">DE</MenuItem>
            <MenuItem value="es">ES</MenuItem>
          </Select>
        </FormControl>
        
        <Button color="inherit" onClick={handleLogout}>
          {t('GSCLIMBING.LOGOUT')}
        </Button>
      </Toolbar>
    </AppBar>
  );
};