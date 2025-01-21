import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../layout/mailLayout';
import ButtonComponents from '../components/buttonComponents';
import TextFieldComponent from '../components/textBoxComponents';
import { Stack, Typography, Box, IconButton, InputAdornment } from '@mui/material';
import { Checkbox } from '@mui/material';


function RegistrationPage() {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/registration/'); // Navigates to the About page
  };

  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCompareError, setPasswordCompareError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);  // Update the email state
    };

    const handlePassword1Change = (e) => {
      setPassword1(e.target.value);  // Update the email state
      };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);  // Update the email state
        };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission (if inside a form)

    console.log("Button clicked");
    console.log(email)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { // Use the current email state here
        console.log("Invalid email");
        setEmailError('有効なメールアドレスを入力してください');
    } else {
        console.log("Valid email");
        setEmailError('');
    }


    if (password1.length < 12 || password1.length > 20) {
      setPasswordError('12文字以上20文字以内で、半角の大文字, 小文字, 数字を含めてください。');
      console.log('error founf')
  } else {
      setPasswordError('');
  }

    if(password1!=password2){
      setPasswordCompareError('パスワードが一致していません')
    } else {
      setPasswordCompareError('')
    }

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
              height: '568px',
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
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} onChange={handleEmailChange} />
            </Stack>
            {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
            <Stack direction="column" spacing={1}>
              <Stack direction="row" spacing={25}>
                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
              </Stack>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} type='password' onChange={handlePassword1Change}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <ButtonComponents label={'hiii'} />

                    </IconButton>
                  </InputAdornment>
                ),
              }}/>
            </Stack>
            {passwordError && <p style={{ color: 'red', fontSize: '12px' }}>{passwordError}</p>}
            <Typography color='#666C75' width={385} fontSize={'12px'} textAlign={'left'}>・半角大文字, 小文字, 数字を含めた12文字以上20桁以内</Typography>
            <Stack direction="column" spacing={1} >
              <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード確認用</Typography>
              <TextFieldComponent sx={{ width: '385px', height: '44px' }} type='password' onChange={handlePassword2Change}
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
            {passwordCompareError && <p style={{ color: 'red', fontSize: '12px' }}>{passwordCompareError}</p>}
            <Stack width={'385px'} direction="row" spacing={1}>
              <Checkbox></Checkbox>
              <Typography color='#666C75' width={385} fontSize={'13px'} textAlign={'left'}>新規登録することにより、当社の利用規約とプライバシーポリシーに同意したとみなされます。</Typography>
            </Stack>
            <ButtonComponents sx={{ width: '385px', borderRadius: '48px', mt: '20px' }} label={'新規登録'} onClick={handleSubmit} />
          </Box>

        </header>
      </div>
    </MainLayout>
  );
}

export default RegistrationPage;
