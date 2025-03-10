import React, { useState } from 'react';
import MainLayout from "../../layout/mailLayout";
import { Box, Stack, Typography } from "@mui/material";
import ButtonComponents from "../../components/buttonComponents";
import TextFieldComponent from "../../components/textBoxComponents";
import { apiAuth } from '../../utils/http';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);  // Update the password state
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);  // Update the email state
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission (if inside a form)
    
        console.log("Button clicked");
        console.log(email)
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) { // Use the current email state here
            console.log("Invalid email");
            setEmailError('有効なメールアドレスを入力してください');
            return;
        } else {
            console.log("Valid email");
            setEmailError('');
        }

        console.log(emailError)

        if (emailError==='')
            {
            apiAuth.post("signin", {
                    "email": email,
                    "password": password
              })
              .then((res) => {
                navigate("/home");
              })
              .catch((err) => {
                if (err.response && err.response.data) {
                    console.log("API Error >>", err.response.data);
                    const errorMessage = "メールアドレス（またはユーザー名）かパスワードに誤りがあります"; 
                    setEmailError(errorMessage);
                } else {
                    console.log("Unexpected error >>", err);
                    setEmailError("サーバーエラーが発生しました");
            }});
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
                            <TextFieldComponent sx={{ width: '385px', height: '44px', borderRadius: '2px' }} onChange={handleEmailChange}/>
                        </Stack>
                        <Stack direction="column" spacing={1}>
                            <Stack direction="row" spacing={25}>
                                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>パスワード</Typography>
                                <Typography color='#666C75' fontSize={'12px'} textAlign={'left'} sx={{ textDecoration: 'underline', cursor:"pointer" }} onClick={() => navigate('/reset')}>パスワードを忘れた</Typography>
                            </Stack>
                            <TextFieldComponent sx={{ width: '385px', height: '44px', borderRadius: '2px' }} type='password' onChange={handlePasswordChange}/>
                        </Stack>
                        <ButtonComponents sx={{ width: '385px', height: '48px', borderRadius: '44px', mt: '20px' }} type='password' label={'ログイン'} onClick={handleSubmit}/>
                        {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
                    </Box>

                </header>
            </div>
        </MainLayout>
    );
}

export default LoginPage;