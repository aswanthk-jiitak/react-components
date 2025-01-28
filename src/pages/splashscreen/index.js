import React, { useState } from 'react';
import MainLayout from "../../layout/mailLayout";
import { Box, Stack, Typography } from "@mui/material";
import ButtonComponents from "../../components/buttonComponents";
import TextFieldComponent from "../../components/textBoxComponents";
import { apiAuth } from '../../utils/http';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../assets/images/Vector.svg';

const splashscreenPage = () => {

    return (
        <MainLayout>
        <div className="App">
                <header className="App-header">
                    <Box>
                    <img width="48px" src={LogoImage}></img>
                    </Box>
                </header>
            </div>
            </MainLayout>
    );
}

export default splashscreenPage;