// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import '../App.css';
import React, { useState } from 'react';
import Buttons from '../components/button';
import TextFields from '../components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';


function NewPasswordPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/reset-success/'); // Navigates to the About page
};

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
};


  return (
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
          border: '0.5px solid #ddd', 
          justifyContent: 'center'
        }}>
        <Typography fontWeight="bold" // Makes the text bold
            textAlign="left" // Aligns the text to the left 
            color='black' fontSize={'29px'}>新しいパスワード</Typography>
        <Typography color='#666C75' width={385} fontSize={'15px'} textAlign={'left'}>新しく設定したいパスワードを入力してください。Input password requirements here / パスワード入力条件をここに記載してください</Typography>
      <Stack direction="column" spacing={1}>
      <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
      <TextFields sx={{ width: '385px', height:'48px' }} type='password' />
      </Stack>
      <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={25}>
        <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード（確認）</Typography>
        </Stack>
        <TextFields sx={{ width: '385px', height:'48px' }} type='password' 
        InputProps={{
            endAdornment: (
                
                <InputAdornment position="end">
                    type={showPassword ? 'text' : 'password'}
                    <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? 'Hide' : 'Show'}
                    </IconButton>
                </InputAdornment>
            )
        }}/>
        </Stack>
        <Buttons sx={{ width: '385px', borderRadius: '48px'}} label={'設定する'} onClick={handleNavigate}/>
        </Box>
      
      </header>
    </div>
  );
}

export default NewPasswordPage;
