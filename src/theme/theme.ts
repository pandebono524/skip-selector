import { createTheme, PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#0052CC',
      light: '#4C9AFF',
      dark: '#0747A6',
    },
    secondary: {
      main: '#00875A',
      light: '#57D9A3',
      dark: '#006644',
    },
    background: {
      default: mode === 'light' ? '#F4F5F7' : '#1B1B1B',
      paper: mode === 'light' ? '#FFFFFF' : '#2D2D2D',
    },
    text: {
      primary: mode === 'light' ? '#172B4D' : '#FFFFFF',
      secondary: mode === 'light' ? '#5E6C84' : '#A5ADBA',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: mode === 'light' 
              ? '0 8px 24px rgba(0,0,0,0.12)'
              : '0 8px 24px rgba(0,0,0,0.4)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '1rem',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
        },
      },
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.05)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.15)',
    '0px 12px 24px rgba(0,0,0,0.2)',
    '0px 16px 32px rgba(0,0,0,0.25)',
    '0px 20px 40px rgba(0,0,0,0.3)',
    '0px 24px 48px rgba(0,0,0,0.35)',
    '0px 28px 56px rgba(0,0,0,0.4)',
    '0px 32px 64px rgba(0,0,0,0.45)',
    '0px 36px 72px rgba(0,0,0,0.5)',
    '0px 40px 80px rgba(0,0,0,0.55)',
    '0px 44px 88px rgba(0,0,0,0.6)',
    '0px 48px 96px rgba(0,0,0,0.65)',
    '0px 52px 104px rgba(0,0,0,0.7)',
    '0px 56px 112px rgba(0,0,0,0.75)',
    '0px 60px 120px rgba(0,0,0,0.8)',
    '0px 64px 128px rgba(0,0,0,0.85)',
    '0px 68px 136px rgba(0,0,0,0.9)',
    '0px 72px 144px rgba(0,0,0,0.95)',
    '0px 76px 152px rgba(0,0,0,1)',
    '0px 80px 160px rgba(0,0,0,1)',
    '0px 84px 168px rgba(0,0,0,1)',
    '0px 88px 176px rgba(0,0,0,1)',
    '0px 92px 184px rgba(0,0,0,1)',
  ],
}); 