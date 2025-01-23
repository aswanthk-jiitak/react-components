import React, { useState, useRef } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import MainLayout from '../../layout/mailLayout';
import TextFieldComponent from '../../components/textBoxComponents';
import ButtonComponents from '../../components/buttonComponents';

const OtpVerify = () => {
    const [otpValues, setOtpValues] = useState(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const inputRefs = useRef([]);

    const handleOtpChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otpValues];
        newOtp[index] = value;
        setOtpValues(newOtp);
        if (value && index < otpValues.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleResend = () => {
        console.log("Resend");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    };

    return (
        <MainLayout>
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
                }}
            >
                <Typography variant="h6" fontWeight="bold">
                    認証コードを入力してください
                </Typography>

                <Typography variant="body2" sx={{ color: '#666', marginBottom: '16px' }}>
                    s********i@gmail.com 宛に送信した認証コードを入力してください
                </Typography>

                {/* OTP Inputs */}
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
                    {otpValues.map((value, index) => (
                        <TextFieldComponent
                            key={index}
                            type="text"
                            value={value}
                            inputMode="numeric"
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            size="small"
                            maxLength={1}
                            sx={{
                                width: '48px',
                                height: '48px',
                                textAlign: 'center',
                                fontSize: '20px',
                            }}
                        />
                    ))}
                </Box>

                {/* Submit Button */}
                <ButtonComponents
                    label={
                        loading ? <CircularProgress size={24} color="inherit" /> : "認証する"
                    }
                    variant="contained"
                    color="ochre"
                    onClick={handleSubmit}
                    sx={{
                        width: '100%',
                        borderRadius: '30px',
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                    }}
                />

                {/* Resend Link */}
                <Typography
                    variant="body2"
                    sx={{ marginTop: '16px', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'underline' }}
                    onClick={handleResend}
                >
                    再送信する
                </Typography>

                {error && <Typography color="error">{error}</Typography>}
            </Box>
        </MainLayout>
    );
};

export default OtpVerify;
