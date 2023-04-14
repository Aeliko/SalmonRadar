import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import StartWaveButton from './StartWaveButton';
import WaveArea from './WaveArea';

function App() {
    const [ count, setCount ] = useState(0);

    return (
        <div className="App">
            <h1>SalmonRadar</h1>
            <div className="card">
                <WaveArea />
            </div>
        </div>
    );
}

export default App;
