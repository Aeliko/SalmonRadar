import { useState } from 'react';
import StartWaveButton from './StartWaveButton';

function WaveArea() {
    let [ goldenEggCount, setGoldenEggCount ] = useState(0);
    let [ waveNumber, setWaveNumber ] = useState(1);
    return (
        <div>
            <input type="text" />
            <div />
            <StartWaveButton
                goldenEggCount={goldenEggCount}
                setGoldenEggCount={setGoldenEggCount}
                waveNumber={waveNumber}
                setWaveNumber={setWaveNumber}
            />
        </div>
    );
}

export default WaveArea;
