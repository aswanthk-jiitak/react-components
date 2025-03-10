import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashscreenPage from './pages/splashscreen';


// Lazy load the components
const LoginPage = lazy(() => import('./pages/login'));
const PasswordPage = lazy(() => import('./pages/possword'));
const ResetPage = lazy(() => import('./pages/reset-pw'));
const EmailPage = lazy(() => import('./pages/forgotPassword'));
const NewPasswordPage = lazy(() => import('./pages/setNewPW'));
const ResetSuccessPage = lazy(() => import('./pages/reset-complete'));
const PasswordSettingPage = lazy(() => import('./pages/passwordSetting'));
const RegistrationPage = lazy(() => import('./pages/registration'));
const AccountInformationPage = lazy(() => import('./pages/accountInformation'));
const OTPPage = lazy(() => import('./pages/otp-verification'));
const SplashScreenPage = lazy(() => import('./pages/splashscreen'));
const HomePage = lazy(() => import('./pages/home'));



const App = () => {
  return (
    <Router>
      {/* Wrap routes in Suspense for lazy-loaded components */}
      <Suspense fallback={<SplashscreenPage />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/pass" element={<PasswordPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/new-pass" element={<NewPasswordPage />} />
          <Route path="/reset-success" element={<ResetSuccessPage />} />
          <Route path="/password-reset" element={<PasswordSettingPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/account-information" element={<AccountInformationPage />} />
          <Route path="/otp-verification" element={<OTPPage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/splash-screen" element={<SplashScreenPage />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
