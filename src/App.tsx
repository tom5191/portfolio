import Intro from './components/intro';
import './App.css';
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack spacing={3}>
        <Intro/>
      </Stack>
    </div>
  );
}

export default App;
