// // import logo from './logo.svg';
// import { alignProperty } from '@mui/material/styles/cssUtils';
import './App.css';
import Buttons from './components/button';
import TextFields from './components/textField';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
        display="flex" 
        flexDirection="column" 
        gap={2}
        borderRadius={16}
        alignItems="center" // Centers items horizontally
        justifyContent="center" // Centers items vertically
        sx={{
          border: '0.5px solid black', // Border width, style, and color
          padding: 2, // Optional: Add padding inside the box
          borderRadius: 0, // Optional: Add rounded corners
          width: '449px',
          height: '442px'
        }}
        >
        <Typography fontWeight="bold" // Makes the text bold
            textAlign="left" // Aligns the text to the left 
            color='black' fontSize={'29px'}>パスワード設定</Typography>
        <TextFields sx={{ width: '300px' }} size='small' />
        <TextFields sx={{ width: '300px' }} size='small' type='password' />
        <Buttons sx={{ width: '300px', borderRadius: '16px'}} label={'Login'}/>
        </Box>
      
      </header>
    </div>
  );
}

export default App;
