
import '../App.css';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/mailLayout';
import ButtonComponents from '../components/buttonComponents';
import TextFieldComponent from '../components/textBoxComponents';

function ResetPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/email/'); // Navigates to the About page
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
              height: '376px',
              margin: '0 auto',
              padding: '24px',
              border: '0.5px solid #ddd',
              justifyContent: 'center'
            }}>
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'29px'}>パスワードをお忘れですか</Typography>
            <Typography color='#666C75' width={385} fontSize={'15px'} textAlign={'left'}>現在使っているメールアドレスを入力してください。
              パスワードの再設定用のメールをお送りします。</Typography>
            <Stack direction="column" spacing={1}>
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>登録済みメールアドレス</Typography>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} />
            </Stack >
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: '22px' }} label={'パスワード再設定用メールを送信'} onClick={handleNavigate} />
            <Typography fontWeight="bold" // Makes the text bold
              textAlign="left" // Aligns the text to the left 
              color='black' fontSize={'15px'}>ログインに戻る</Typography>
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default ResetPage;
