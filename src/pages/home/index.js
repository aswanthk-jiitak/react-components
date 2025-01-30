import React, { useState } from 'react';
import MainLayout from "../../layout/mailLayout";
import { Box, Stack, Typography } from "@mui/material";
import ButtonComponents from "../../components/buttonComponents";
import TextFieldComponent from "../../components/textBoxComponents";
import { apiAuth } from '../../utils/http';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    return (
        <MainLayout>
            <div className="App">
                <header className="App-header">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                            width: '449px',
                            height: '376px',
                            margin: '0 auto',
                            padding: '24px',
                            // border: '0.5px solid #ddd',
                            justifyContent: 'center',
                            // mt:'5%'
                        }}>
                            <Typography color='black'>Welcome to Homepage...!</Typography>
                        
                    </Box>

                </header>
            </div>
        </MainLayout>
    );
}

export default HomePage;