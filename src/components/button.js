import React from 'react';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      ochre: {
        main: '#1B2331',
        light: '#E9DB5D',
        dark: '#A29415',
        contrastText: '#FFFFFF', // Adjusted to ensure readability
      },
    },
  });

const Buttons = ({ label, variant = "contained", color = "ochre", onClick, sx = {width: '385px', borderRadius: '20px' } }) => {
    return (
        <ThemeProvider theme={theme}>
        <Button variant={variant} color={color} onClick={onClick} sx={sx}>
            {label}
        </Button>
        </ThemeProvider>
    );
};

export default Buttons;
