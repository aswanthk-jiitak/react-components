// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import '../App.css';
import Buttons from '../components/button';
import TextFields from '../components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import MainLayout from '../layout/mailLayout';


const LoginPage = () => {
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
              border: '0.5px solid #ddd',
              justifyContent: 'center',
              // mt:'5%'
            }}>
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'29px'}
              width={'385px'}>ログイン</Typography>
            <Stack direction="column" spacing={1} sx={{ mt: '22px' }}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>メールアドレス</Typography>
              <TextFields sx={{ width: '385px', height: '44px', borderRadius: '2px' }} />
            </Stack>
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={25}>
                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'} sx={{ textDecoration: 'underline' }} >パスワードを忘れた</Typography>
              </Stack>
              <TextFields sx={{ width: '385px', height: '44px', borderRadius: '2px' }} type='password' />
            </Stack>
            <Buttons sx={{ width: '385px', height: '48px', borderRadius: '44px', mt: '20px' }} type='password' label={'ログイン'} />
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
