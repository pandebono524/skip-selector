import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  CircularProgress,
  useTheme,
  useMediaQuery,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Button,
  Fade,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StraightenIcon from '@mui/icons-material/Straighten';
import { motion, AnimatePresence } from 'framer-motion';
import SkipCard from './SkipCard';
import { Skip } from '../types/skip';
import axios from 'axios';

const STEPS = ['Postcode', 'Waste Type', 'Select Skip', 'Permit Check', 'Choose Date', 'Payment'] as const;
const API_ENDPOINT = 'https://app.wewantwaste.co.uk/api/skips/by-location';
const DEFAULT_POSTCODE = 'NR32';
const DEFAULT_AREA = 'Lowestoft';

interface SkipSelectorProps {
  toggleTheme: () => void;
}

type StepType = typeof STEPS[number];

const styles = {
  container: {
    py: { xs: 2, sm: 3, md: 4 },
    px: { xs: 1, sm: 2, md: 3 },
  },
  themeToggle: {
    position: 'fixed',
    top: { xs: 8, sm: 16 },
    right: { xs: 8, sm: 16 },
    zIndex: 1000,
  },
  stepperPaper: {
    p: { xs: 2, sm: 3 },
    mb: { xs: 3, sm: 4 },
    background: (theme: any) => theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)' 
      : 'rgba(0, 0, 0, 0.02)',
    borderRadius: 2,
    backdropFilter: 'blur(10px)',
  },
  title: {
    fontWeight: 'bold',
    color: (theme: any) => theme.palette.text.primary,
    mb: { xs: 1, sm: 2 },
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
  },
  subtitle: {
    mb: { xs: 4, sm: 6 },
    fontSize: { xs: '1rem', sm: '1.25rem' },
  },
  gridContainer: {
    mt: { xs: 1, sm: 2 },
    pb: { xs: 20, sm: 10 },
  },
  bottomBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    p: { xs: 1.5, sm: 2 },
    background: (theme: any) => theme.palette.mode === 'dark' 
      ? 'rgba(0, 0, 0, 0.95)' 
      : 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderTop: (theme: any) => `1px solid ${theme.palette.divider}`,
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: { xs: 1, sm: 0 },
    justifyContent: 'space-between',
    alignItems: { xs: 'stretch', sm: 'center' },
    zIndex: 1000,
  },
} as const;


const SkipSelector: React.FC<SkipSelectorProps> = ({ toggleTheme }) => {
  const [skips, setSkips] = React.useState<Skip[]>([]);
  const [selectedSkip, setSelectedSkip] = React.useState<Skip | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const activeStep = 2; 

  React.useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await axios.get<Skip[]>(
          `${API_ENDPOINT}?postcode=${DEFAULT_POSTCODE}&area=${DEFAULT_AREA}`
        );
        setSkips(response.data.sort((a: Skip, b: Skip) => a.size - b.size));
        setLoading(false);
      } catch (err) {
        setError('Failed to load skip data. Please try again later.');
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleSkipSelect = React.useCallback((skip: Skip) => {
    setSelectedSkip(skip);
  }, []);

  const handleBack = React.useCallback(() => {
  }, []);

  const handleContinue = React.useCallback(() => {
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography color="error" variant="h6">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="xl" sx={styles.container}>
      <Box sx={styles.themeToggle}>
        <IconButton 
          onClick={toggleTheme} 
          color="inherit"
          sx={{
            background: theme.palette.mode === 'dark' 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              background: theme.palette.mode === 'dark' 
                ? 'rgba(255, 255, 255, 0.2)' 
                : 'rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Box>

      <Paper elevation={0} sx={styles.stepperPaper}>
        <Stepper 
          activeStep={activeStep} 
          alternativeLabel={!isMobile}
          orientation={isMobile ? 'vertical' : 'horizontal'}
          sx={{ 
            mb: isMobile ? 4 : 0,
            '& .MuiStepLabel-label': {
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
            },
          }}
        >
          {STEPS.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Paper>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={styles.title}
        >
          Choose Your Skip Size
        </Typography>

        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          sx={styles.subtitle}
        >
          Select the skip size that best suits your needs
        </Typography>
      </motion.div>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        justifyContent="center"
        sx={styles.gridContainer}
      >
        <AnimatePresence>
          {skips.map((skip, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={skip.id}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <SkipCard
                skip={skip}
                selected={selectedSkip?.id === skip.id}
                onSelect={handleSkipSelect}
              />
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      <Box sx={styles.bottomBar}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          width: { xs: '100%', sm: 'auto' },
        }}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleBack}
            fullWidth={isMobile}
            size={isMobile ? 'large' : 'medium'}
          >
            Back
          </Button>

          {selectedSkip && (
            <Fade in={true}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 1, sm: 3 },
                ml: { xs: 0, sm: 2 },
                pl: { xs: 0, sm: 2 },
                pt: { xs: 1, sm: 0 },
                borderLeft: { xs: 'none', sm: `1px solid ${theme.palette.divider}` },
                borderTop: { xs: `1px solid ${theme.palette.divider}`, sm: 'none' },
                width: { xs: '100%', sm: 'auto' },
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  width: { xs: '100%', sm: 'auto' },
                }}>
                  <StraightenIcon color="primary" />
                  <Typography>
                    <strong>{selectedSkip.size}</strong> Yards
                  </Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  width: { xs: '100%', sm: 'auto' },
                }}>
                  <AccessTimeIcon color="primary" />
                  <Typography>
                    <strong>{selectedSkip.hire_period_days}</strong> Days Hire
                  </Typography>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>

        <Button
          variant="contained"
          color="primary"
          disabled={!selectedSkip}
          onClick={handleContinue}
          fullWidth={isMobile}
          size={isMobile ? 'large' : 'medium'}
          sx={{
            mt: { xs: 1, sm: 0 },
            px: { xs: 2, sm: 4 },
            py: { xs: 1.5, sm: 1.5 },
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
              animation: 'shine 1.5s infinite',
            },
            '@keyframes shine': {
              '0%': {
                transform: 'translateX(-100%)',
              },
              '100%': {
                transform: 'translateX(100%)',
              },
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default SkipSelector; 