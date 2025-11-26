import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { 
  Container, 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography,
  Link,
  Alert
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const { handleLogin } = useAuth();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError(t('GSCLIMBING.FILL_ALL_FIELDS') || 'Please fill all fields');
      return;
    }

    setLoading(true);
    try {
      await handleLogin({ username, password });
    } catch (err) {
      setError(t('GSCLIMBING.INVALID_CREDENTIALS') || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom align="center">
            {t('GSCLIMBING.LOGIN')}
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          
          <Box component="form" onSubmit={onSubmit}>
            <TextField
              fullWidth
              label={t('GSCLIMBING.USERNAME')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              required
            />
            
            <TextField
              fullWidth
              type="password"
              label={t('GSCLIMBING.PASSWORD')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              required
            />
            
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? t('GSCLIMBING.LOADING') : t('GSCLIMBING.LOGIN')}
            </Button>
            
            <Link href="#" sx={{ display: 'block', textAlign: 'center' }}>
              {t('GSCLIMBING.FORGOTPASSWORD')}
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};