import React from 'react';
import { Card, CardContent, Typography, Button, Box, Chip, useTheme, alpha } from '@mui/material';
import { motion } from 'framer-motion';
import { SkipCardProps } from '../types/skip';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BlockIcon from '@mui/icons-material/Block';

const SkipCard: React.FC<SkipCardProps> = ({ skip, selected, onSelect }) => {
  const theme = useTheme();
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const isDisabled = !skip.allowed_on_road && !skip.allows_heavy_waste;

  return (
    <motion.div
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isDisabled ? 0.7 : 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ width: '100%', maxWidth: 400 }}
    >
      <Card
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'visible',
          background: theme.palette.mode === 'dark' 
            ? alpha(theme.palette.background.paper, 0.8)
            : theme.palette.background.paper,
          border: `2px solid ${
            isDisabled
              ? theme.palette.error.main
              : selected 
                ? theme.palette.primary.main 
                : theme.palette.mode === 'dark'
                  ? alpha(theme.palette.common.white, 0.1)
                  : alpha(theme.palette.common.black, 0.1)
          }`,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease-in-out',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          '&:hover': {
            boxShadow: isDisabled 
              ? 'none' 
              : theme.palette.mode === 'dark'
                ? '0 8px 32px rgba(0,0,0,0.5)'
                : '0 8px 32px rgba(0,0,0,0.1)',
          },
        }}
        onClick={() => !isDisabled && onSelect(skip)}
      >
        {isDisabled && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 1,
              color: theme.palette.error.main,
            }}
          >
            <BlockIcon sx={{ fontSize: 40 }} />
            <Typography variant="subtitle1" fontWeight="bold">
              Not Available
            </Typography>
          </Box>
        )}

        <Box
          sx={{
            position: 'absolute',
            top: -12,
            right: 16,
            background: isDisabled 
              ? theme.palette.error.main 
              : theme.palette.primary.main,
            borderRadius: '12px',
            px: 2,
            py: 1,
            color: 'white',
            fontWeight: 'bold',
            boxShadow: `0 4px 12px ${alpha(
              isDisabled ? theme.palette.error.main : theme.palette.primary.main,
              0.3
            )}`,
          }}
        >
          {skip.size} Yards
        </Box>

        <CardContent 
          sx={{ 
            p: 3,
            filter: isDisabled ? 'grayscale(1)' : 'none',
            opacity: isDisabled ? 0.5 : 1,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ 
            fontWeight: 'bold',
            color: theme.palette.text.primary,
            mb: 3,
          }}>
            {skip.size} Yard Skip
          </Typography>

          <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon color="action" />
            <Typography variant="body1" color="text.secondary">
              {skip.hire_period_days} day hire period
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" color="primary" sx={{ 
              fontWeight: 'bold',
              background: theme.palette.mode === 'dark' 
                ? 'linear-gradient(45deg, #4C9AFF, #0052CC)'
                : 'none',
              WebkitBackgroundClip: theme.palette.mode === 'dark' ? 'text' : 'unset',
              WebkitTextFillColor: theme.palette.mode === 'dark' ? 'transparent' : 'unset',
            }}>
              £{totalPrice.toFixed(2)}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Price includes VAT
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
            <Chip
              icon={skip.allowed_on_road ? <CheckCircleIcon /> : <WarningIcon />}
              label={skip.allowed_on_road ? "Road placement allowed" : "Not allowed on road"}
              color={skip.allowed_on_road ? "success" : "error"}
              variant={skip.allowed_on_road ? "filled" : "outlined"}
              sx={{ 
                width: 'fit-content',
                '& .MuiChip-icon': {
                  color: 'inherit'
                }
              }}
            />

            <Chip
              icon={skip.allows_heavy_waste ? <LocalShippingIcon /> : <WarningIcon />}
              label={skip.allows_heavy_waste ? "Suitable for heavy waste" : "Not suitable for heavy waste"}
              color={skip.allows_heavy_waste ? "info" : "error"}
              variant={skip.allows_heavy_waste ? "filled" : "outlined"}
              sx={{ 
                width: 'fit-content',
                '& .MuiChip-icon': {
                  color: 'inherit'
                }
              }}
            />
          </Box>

          <Button
            variant={selected ? "contained" : "outlined"}
            fullWidth
            disabled={isDisabled}
            onClick={(e) => {
              e.stopPropagation();
              !isDisabled && onSelect(skip);
            }}
            sx={{
              mt: 'auto',
              py: 1.5,
              backgroundColor: selected ? theme.palette.primary.main : 'transparent',
              '&:hover': {
                backgroundColor: selected 
                  ? theme.palette.primary.dark 
                  : alpha(theme.palette.primary.main, 0.1),
              },
              position: 'relative',
              overflow: 'hidden',
              '&::after': selected ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                animation: 'shine 1.5s infinite',
              } : {},
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
            {selected ? 'Selected' : 'Select This Skip'}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkipCard; 