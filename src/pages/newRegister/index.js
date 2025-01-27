import React, { useState } from 'react';
import MainLayout from '../../layout/mailLayout';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, InputAdornment, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import TextFieldComponent from '../../components/textBoxComponents';
import ButtonComponents from '../../components/buttonComponents';

const NewRegister = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("Please accept the terms to continue.");
            return;
        }
        navigate('/otp');
    };

    return (
        <MainLayout>
            <Box
                sx={{
                    width: '450px',
                    margin: '0 auto',
                    padding: '32px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                }}
            >
                {/* Title */}
                <Typography variant="h5" fontWeight="bold" mb={3}>
                    新規登録
                </Typography>

                {/* Email Input */}
                <Typography variant="body2" fontWeight="bold" mb={1}>
                    メールアドレス
                </Typography>
                <TextFieldComponent
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Password Input */}
                <Typography variant="body2" fontWeight="bold" mt={2} mb={1}>
                    パスワード
                </Typography>
                <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? '非表示' : '表示'}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography variant="caption" color="gray" mt={1} display="block">
                    ・半角大文字、小文字、数字を含めた12文字以上20桁以内
                </Typography>

                {/* Confirm Password Input */}
                <Typography variant="body2" fontWeight="bold" mt={2} mb={1}>
                    パスワード確認用
                </Typography>
                <TextField
                    fullWidth
                    type={showConfirmPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? '非表示' : '表示'}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                {/* Checkbox for Terms */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />
                    }
                    label={
                        <Typography variant="body2" color="gray">
                            新規登録することにより、 当社の
                            <Typography
                                component="span"
                                sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#111827', fontWeight: 'bold' }}
                            >
                                利用規約
                            </Typography>
                            と
                            <Typography
                                component="span"
                                sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#111827', fontWeight: 'bold' }}
                            >
                                プライバシーポリシー
                            </Typography>
                            に同意したことになります。
                        </Typography>
                    }
                    sx={{ mt: 2 }}
                />

                {/* Submit Button */}
                <ButtonComponents
                    label="新規登録"
                    color="black"
                    onClick={handleSubmit}
                    sx={{
                        width: '100%',
                        borderRadius: '30px',
                        padding: '12px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        backgroundColor: '#111827',
                        color: 'white',
                        mt: 3,
                    }}
                />
            </Box>
        </MainLayout>
    );
};

export default NewRegister;
