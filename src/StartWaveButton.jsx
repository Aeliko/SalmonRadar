import { Fragment } from 'react';
import returnWaveTimeline from './WaveTimeline';

function StartWaveButton(props) {
    if (props.waveNumber == 1) {
        props.setHazardLevel(60);
        return (
            <button
                onClick={() => {
                    props.setHazardLevel(60);
                    BeginWave(props.hazardLevel, props.waveNumber, props.setWaveNumber);
                }}>
                Start Wave {props.waveNumber} Hazard Level {props.hazardLevel}%
            </button>
        );
    } else if (props.waveNumber == 5) {
        return (
            <Fragment>
                <ol>
                    <li>Spawn 1: Right of Basket</li>
                    <li>Spawn 2: Beach</li>
                    <li>Spawn 3: Perch</li>
                    <li>Spawn 4: Pit</li>
                    <li>Spawn 5: Basket</li>
                    <li>Spawn 6: Perch</li>
                    <li>Spawn 7: Beach</li>
                    <li>Spawn 8: Basket</li>
                    <li>Spawn 9: Basket</li>
                    <li>Spawn 10: Steps</li>
                    <li>Spawn 11: Pit</li>
                    <li>Spawn 12: Right of Basket</li>
                    <li>Spawn 13: Basket</li>
                    <li>Spawn 14: Beach</li>
                    <li>Spawn 15: Right of Basket</li>
                </ol>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel);
                        BeginWave(props.hazardLevel, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel}%
                </button>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel + 30);
                        BeginWave(props.hazardLevel + 30, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel + 30}%
                </button>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel + 60);
                        BeginWave(props.hazardLevel + 60, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel + 60}%
                </button>
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel);
                        BeginWave(props.hazardLevel, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel}%
                </button>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel + 30);
                        BeginWave(props.hazardLevel + 30, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel + 30}%
                </button>
                <button
                    onClick={() => {
                        props.setHazardLevel(props.hazardLevel + 60);
                        BeginWave(props.hazardLevel + 60, props.waveNumber, props.setWaveNumber);
                    }}>
                    Start Wave {props.waveNumber} Hazard Level {props.hazardLevel + 60}%
                </button>
            </Fragment>
        );
    }
}

function BeginWave(hazardLevel, waveNumber, setWaveNumber) {
    console.log(`Wave ${waveNumber} Hazard Level ${hazardLevel}% Starting...`);

    const synth = window.speechSynthesis;

    let waveStartingSentence = new SpeechSynthesisUtterance(`Wave ${waveNumber} Starting`);
    synth.speak(waveStartingSentence);

    if (waveNumber == 4) {
        let alertMessage = new SpeechSynthesisUtterance(`Please refer to on-screen instructions`);
        console.log('Please refer to on-screen instructions');
        synth.speak(alertMessage);
    }

    let timeline = returnWaveTimeline(hazardLevel, waveNumber);
    timeline.forEach((bossInfo) => {
        let waitTimeBeforeNotification = 0;
        let boss = bossInfo.Boss;
        let spawn = bossInfo.Spawn;
        let time = bossInfo.Timing;
        waitTimeBeforeNotification = (100 - time + 10) * 1000;
        setTimeout(() => {
            console.log(`${boss} at ${spawn} at ${time}`);
            let utterThis = new SpeechSynthesisUtterance(`${boss} at ${spawn}`);
            synth.speak(utterThis);
        }, waitTimeBeforeNotification);
    });
    if (waveNumber < 5) {
        setWaveNumber(waveNumber + 1);
    } else {
        setWaveNumber(1);
        setHazardLevel(60);
    }
}

export default StartWaveButton;
