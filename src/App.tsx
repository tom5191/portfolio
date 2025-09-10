import Intro from './components/intro';
import WorkHistory from './components/resume';
import './App.css';
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack>
        <Intro/>
        <WorkHistory/>
      </Stack>
    </div>
  );
}

export default App;
