import { useState, Fragment } from 'react';
import StartWaveButton from './StartWaveButton';
import sockeye from './assets/sockeye.jpg';

function WaveArea() {
    let [ goldenEggCount, setGoldenEggCount ] = useState(0);
    let [ waveNumber, setWaveNumber ] = useState(1);
    let [ hazardLevel, setHazardLevel ] = useState(60);
    return (
        <Fragment>
            <img src={sockeye} />
            <div />
            <StartWaveButton
                goldenEggCount={goldenEggCount}
                setGoldenEggCount={setGoldenEggCount}
                waveNumber={waveNumber}
                setWaveNumber={setWaveNumber}
                hazardLevel={hazardLevel}
                setHazardLevel={setHazardLevel}
            />
        </Fragment>
    );
}

export default WaveArea;
