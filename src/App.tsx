import { AppRoutes } from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';
import { theme } from './styles/theme';
import './i18n/config';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;