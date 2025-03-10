
import { AppBar, Toolbar, Typography } from '@mui/material';
import LogoImage from '../../assets/images/Vector.svg';
import ButtonComponents from '../buttonComponents';
import { useNavigate } from 'react-router-dom';



const Header = () => {
    const navigate = useNavigate();
    const handleRegi = (e) => {
        e.preventDefault();
        navigate("/registration");

    }
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', borderBottom: '0.5px solid #E8E9EA' }} elevation={0}>
            <Toolbar>
                <img src={LogoImage} alt="Logo" style={{ width: '20px', marginRight: '10px' }} />
                <Typography color="#1B2331" fontSize={'12px'}>Service Name</Typography>
                <ButtonComponents sx={{ width: '104px', height: '32px', borderRadius: '44px', mt: '20px', fontSize: '13px', mt: '0px', ml: 'auto' }} onClick={handleRegi} label={'新規登録'} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;