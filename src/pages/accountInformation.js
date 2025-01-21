// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import '../App.css';
import React, { useState } from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import MainLayout from '../layout/mailLayout';
import ButtonComponents from '../components/buttonComponents';
import TextFieldComponent from '../components/textBoxComponents';


function AccountInformationPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/reset-success/'); // Navigates to the About page
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


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
              height: '684px',
              margin: '0 auto',
              padding: '24px',
              border: '0.5px solid #ddd',
              //   justifyContent: 'center'
            }}>
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'29px'}
              width={'449px'}>タイトル / Title</Typography>
            <Typography color='#666C75' width={449} fontSize={'15px'} textAlign={'left'}>補足情報をここに入力 / Supporting text here</Typography>
            <Stack direction="column" spacing={1} sx={{ mt: "20px" }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>Label</Typography>
              <TextFieldComponent sx={{ width: '449px', height: '44px' }} type='password' />
            </Stack>
            <Stack direction="column" spacing={1} sx={{ mt: "20px" }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>Label</Typography>
              <TextFieldComponent sx={{ width: '449px', height: '44px' }} type='password' />
            </Stack>
            <Stack direction="column" spacing={1} sx={{ mt: "20px" }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>Label</Typography>
              <TextFieldComponent sx={{ width: '449px', height: '44px' }} type='password' />
            </Stack>
            <Stack direction="column" spacing={1} sx={{ mt: "20px" }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>Label</Typography>
              <TextFieldComponent sx={{ width: '449px', height: '44px' }} type='password' />
            </Stack>
            <Stack direction="column" spacing={1} sx={{ mt: "20px" }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>Label</Typography>
              <TextFieldComponent sx={{ width: '449px', height: '44px' }} type='password' />
            </Stack>
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: "20px" }} label={'アカウント登録を申請'} onClick={handleNavigate} />
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default AccountInformationPage;
