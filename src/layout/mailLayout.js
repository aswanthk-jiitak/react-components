import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/headerComponents';


const MainLayout = ({ children }) => {
    return (
        <Box>
            {/* Common Header */}
            <Header />

            {/* Main Content Area */}
            <Box sx={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                {children}
            </Box>
        </Box>
    );
};

export default MainLayout;
