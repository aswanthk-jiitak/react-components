// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import '../App.css';
import Buttons from '../components/button';
import TextFields from '../components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

function ResetSuccessPage() {
  return (
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
          justifyContent: 'center'
        }}>


        <Typography fontWeight="bold" // Makes the text bold
            textAlign="left" // Aligns the text to the left 
            color='black' fontSize={'29px'}>パスワード再設定完了</Typography>
        <Typography color='#666C75' width={300} fontSize={'15px'} textAlign={'left'}>新しいパスワードの設定が完了しました。</Typography>
        <Buttons sx={{ width: '385px', borderRadius: '48px'}} label={'ログイン画面に進む'}/>
        </Box>
      
      </header>
    </div>
  );
}

export default ResetSuccessPage;
