// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import './App.css';
import Buttons from './components/button';
import TextFields from './components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import PasswordPage from './pages/possword';
import ResetPage from './pages/reset-pw';
import EmailPage from './pages/email';
import NewPasswordPage from './pages/setNewPW';
import ResetSuccessPage from './pages/reset-complete';


function App() {
  return (
<Router>
        <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/pass/" element={<PasswordPage />} />
                <Route path="/reset/" element={<ResetPage />} />
                <Route path="/email/" element={<EmailPage />} />
                <Route path="/new-pass/" element={<NewPasswordPage />} />
                <Route path="/reset-success/" element={<ResetSuccessPage />} />




                {/* <Route path="/about" element={<AboutPage />} /> */}
            </Routes>
        </Router>
  );
}

export default App;
