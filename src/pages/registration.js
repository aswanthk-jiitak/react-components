// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import '../App.css';
import Buttons from '../components/button';
import TextFields from '../components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/mailLayout';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility'; // Eye icon
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Eye off icon

function RegistrationPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/registration/'); // Navigates to the About page
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
            width={'385px'}>新規登録</Typography>
      <Stack direction="column" spacing={1} mt={'40px'}>
      <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>メールアドレス</Typography>
      <TextFields sx={{ width: '385px', height:'44px' }} type='password' 
      InputProps={{
        endAdornment: (
            <InputAdornment position="end">
                <IconButton>
                  <Buttons label={'hiii'}/>
                    
                </IconButton>
            </InputAdornment>
        ),
    }}/>
      </Stack>
      <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={25}>
        <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
        </Stack>
        <TextFields sx={{ width: '385px', height:'44px' }} type='password' />
        </Stack>
        <Typography color='#666C75' width={385} fontSize={'13px'} textAlign={'left'}>パスワード入力条件をここに表示 / Input password requirements here</Typography>
        <Buttons sx={{ width: '385px', borderRadius: '48px', mt: '20px'}} label={'新規登録'} onClick={handleNavigate}/>
        <Typography color='#666C75' width={385} fontSize={'13px'} textAlign={'left'}>新規登録を完了すると、ServiceNameの利用規約とプラバシーポリシーに同意したことになります。</Typography>
        </Box>
      
      </header>
    </div>
    </MainLayout>
  );
}

export default RegistrationPage;
