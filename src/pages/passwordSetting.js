
import '../App.css';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/mailLayout';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Eye icon
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Eye off icon
import ButtonComponents from '../components/buttonComponents';
import TextFieldComponent from '../components/textBoxComponents';

function PasswordSettingPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/reset-success/'); // Navigates to the About page
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
              height: '432px',
              margin: '0 auto',
              padding: '24px',
              border: '0.5px solid #ddd',
              justifyContent: 'center'
            }}>
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'29px'}
              width={'385px'}>新しいパスワード</Typography>
            <Typography color='#666C75' width={385} fontSize={'15px'} textAlign={'left'}>新しく設定したいパスワードを入力してください。Input password requirements here / パスワード入力条件をここに記載してください</Typography>
            <Stack direction="column" spacing={1} mt={'40px'}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} type='password'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <ButtonComponents label={'hiii'} />

                      </IconButton>
                    </InputAdornment>
                  ),
                }} />
            </Stack>
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={25}>
                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード（確認）</Typography>
              </Stack>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} type='password' />
            </Stack>
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: '20px' }} label={'設定する'} onClick={handleNavigate} />
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default PasswordSettingPage;
