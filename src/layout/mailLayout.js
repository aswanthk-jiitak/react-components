import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';

const MainLayout = ({ children }) => {
    return (
        <Box>
            {/* Common Header */}
            <Header />
            
            {/* Main Content Area */}
            <Box sx={{ padding: '20px', backgroundColor: '#FFFFFF'}}>
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
