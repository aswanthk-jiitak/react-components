



import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/mailLayout';
import ButtonComponents from '../components/buttonComponents';
import TextFieldComponent from '../components/textBoxComponents';
import { Stack, Typography, Box, IconButton, InputAdornment } from '@mui/material';



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
                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
              </Stack>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} type='password' />
            </Stack>
            <Typography color='#666C75' width={385} fontSize={'13px'} textAlign={'left'}>パスワード入力条件をここに表示 / Input password requirements here</Typography>
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: '20px' }} label={'新規登録'} onClick={handleNavigate} />
            <Typography color='#666C75' width={385} fontSize={'13px'} textAlign={'left'}>新規登録を完了すると、ServiceNameの利用規約とプラバシーポリシーに同意したことになります。</Typography>
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default RegistrationPage;
