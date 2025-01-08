// import logo from './logo.svg';
import './App.css';
import Buttons from './components/button';
import TextFields from './components/textField';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box
        display="flex" 
        flexDirection="column" 
        gap={2}
        borderRadius={16}
        >
        <TextFields sx={{ width: '300px' }} size='small' />
        <TextFields sx={{ width: '300px' }} size='small' type='password' />
        <Buttons sx={{ width: '300px', borderRadius: '16px'}} label={'Login'}/>
        </Box>
      
      </header>
    </div>
  );
}

export default App;
