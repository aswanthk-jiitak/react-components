
import '../App.css';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import MainLayout from '../layout/mailLayout';
import { useNavigate } from 'react-router-dom';
import ButtonComponents from '../components/buttonComponents';

function EmailPage() {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/password-reset/'); // Navigates to the About page
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
              width: '578px',
              height: '278px',
              margin: '0 auto',
              // padding: '24px',
              border: '0.5px solid #ddd',
              justifyContent: 'center'
            }}>
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'29px'}
              width={'385px'}>メールを送信しました</Typography>
            <Typography color='#666C75' width={450} fontSize={'15px'} textAlign={'left'}>s*********i@gmail.com宛にパスワード再設定用のメールをお送りしました。メールに記載されたURLをクリックしてください。</Typography>
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: '25px' }} label={'ログイン画面に戻る'} onClick={handleNavigate} />
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default EmailPage;
