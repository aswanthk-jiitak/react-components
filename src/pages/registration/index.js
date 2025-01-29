import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../../layout/mailLayout';
import ButtonComponents from '../../components/buttonComponents';
import TextFieldComponent from '../../components/textBoxComponents';
import { Stack, Typography, Box, IconButton, InputAdornment, TextField, FormControlLabel, Checkbox } from '@mui/material';
import { apiAuth } from '../../utils/http';

function RegistrationPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordCompareError, setPasswordCompareError] = useState('');
  const [termsError, setTermsError] = useState('');

  // Email Validation
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setEmailError('有効なメールアドレスを入力してください');
    } else {
      setEmailError('');
    }
  };

  // Password Validation
  const handlePassword1Change = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 12 || newPassword.length > 20) {
      setPasswordError('12文字以上20文字以内で、半角の大文字, 小文字, 数字を含めてください。');
    } else {
      setPasswordError('');
    }

    // Check if password matches confirm password
    if (confirmPassword && newPassword !== confirmPassword) {
      setPasswordCompareError('パスワードが一致していません');
    } else {
      setPasswordCompareError('');
    }
  };

  // Confirm Password Validation
  const handlePassword2Change = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setPasswordCompareError('パスワードが一致していません');
    } else {
      setPasswordCompareError('');
    }
  };

  // Validate Form Before Submitting
  const validateForm = () => {
    let valid = true;

    // Email validation
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('有効なメールアドレスを入力してください');
      valid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,20}$/)) {
      setPasswordError('12文字以上20文字以内で、半角の大文字, 小文字, 数字を含めてください。');
      valid = false;
    } else {
      setPasswordError('');
    }

    // Password confirmation check
    if (password !== confirmPassword) {
      setPasswordCompareError('パスワードが一致していません');
      valid = false;
    } else {
      setPasswordCompareError('');
    }

    // Terms & conditions check
    if (!termsAccepted) {
      setTermsError('利用規約に同意してください。');
      valid = false;
    }

    return valid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before proceeding
    if (!validateForm()) return;

    apiAuth
      .post("signup", {
        name: "",  // Add the name as required
        admin_type: "admin",
        email: email,
        status: "active",
        password: password,
        otpVerification: false
      })
      .then(() => {
        navigate("/otp-verification");
      })
      .catch((err) => {
        console.log("error >>", err);
      });
  };

  return (
    <MainLayout>
      <Box
        sx={{
          width: '450px',
          padding: '32px',
          margin: '0 auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
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
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}

        {/* Password Input */}
        <Typography variant="body2" fontWeight="bold" mt={2} mb={1}>
          パスワード
        </Typography>
        <TextField
          fullWidth
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          value={password}
          onChange={handlePassword1Change}
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
        {passwordError && <p style={{ color: 'red', fontSize: '12px' }}>{passwordError}</p>}

        {/* Confirm Password Input */}
        <Typography variant="body2" fontWeight="bold" mt={2} mb={1}>
          パスワード確認用
        </Typography>
        <TextField
          fullWidth
          type={showConfirmPassword ? 'text' : 'password'}
          variant="outlined"
          value={confirmPassword}
          onChange={handlePassword2Change}
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
        {passwordCompareError && <p style={{ color: 'red', fontSize: '12px' }}>{passwordCompareError}</p>}

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
              <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#111827', fontWeight: 'bold' }}>
                利用規約
              </Typography>
              と
              <Typography component="span" sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#111827', fontWeight: 'bold' }}>
                プライバシーポリシー
              </Typography>
              に同意したことになります。
            </Typography>
          }
          sx={{ mt: 2 }}
        />
        {termsError && <p style={{ color: 'red', fontSize: '12px' }}>{termsError}</p>}
        {/* Submit Button */}
        <ButtonComponents
          label="新規登録"
          color="black"
          onClick={handleSubmit}
          // disabled={!validateForm()}  // Disable button if form is invalid
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
}

export default RegistrationPage;
