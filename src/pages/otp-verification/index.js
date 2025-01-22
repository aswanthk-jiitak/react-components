import React, { useState, useRef } from "react";
import MainLayout from "../../layout/mailLayout";
import { Box, Stack, Typography, TextField } from "@mui/material";
import ButtonComponents from "../../components/buttonComponents";
import TextFieldComponent from "../../components/textBoxComponents";
import { apiAuth } from '../../utils/http';
import { useNavigate } from 'react-router-dom';

const OTPPage = () => {

    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // State for OTP digits
    const inputRefs = useRef([]); // Refs for each input field

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) { // Allow only digits and ensure single digit
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "") {
      // Move focus to the previous input field on backspace if empty
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
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
                            width: '518px',
                            height: '327px',
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
                        
                        <Stack direction="row" spacing={0} sx={{ mt: '5px' }}>
                            <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>s*********i@gmail.com</Typography>
                            <Typography color='#666C75' fontSize={'12px'} textAlign={'left'}>宛に送信した認証コードを入力してください</Typography>
                        </Stack>


<Stack direction="row" width={'385px'} spacing={1}>
      {otp.map((digit, index) => (
        <TextField
          key={index}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          inputRef={(ref) => (inputRefs.current[index] = ref)}
          sx={{
            width: "44px",
            height: "44px",
            borderRadius: "2px",
            textAlign: "center",
          }}
          inputProps={{
            maxLength: 1,
            style: { textAlign: "center" },
          }}
        />
      ))}
    </Stack>
                        
                        <ButtonComponents sx={{ width: '385px', height: '48px', borderRadius: '44px', mt: '20px', fontWeight:"bold"}} type='password' label={'認証する'} />
                        <Typography color='#666C75' fontSize={'12px'} textAlign={'left'} fontWeight="bold">再送信する</Typography>


                    </Box>

                </header>
            </div>
        </MainLayout>
    );
}

export default OTPPage;