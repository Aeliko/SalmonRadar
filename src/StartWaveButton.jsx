import { useState } from 'react';

function StartWaveButton(props) {
    return (
        <button
            onClick={() => {
                BeginWave(props.goldenEggCount, props.waveNumber, props.setWaveNumber);
            }}>
            Start Wave {props.waveNumber}
        </button>
    );
}

function BeginWave(goldenEggCount, waveNumber, setWaveNumber) {
    console.log('Wave Starting...');

    const synth = window.speechSynthesis;

    let waveStartingSentence = new SpeechSynthesisUtterance('Wave Starting');
    synth.speak(waveStartingSentence);

    let timeline = returnTimeline();
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
    setWaveNumber(waveNumber + 1);
}

function returnTimeline() {
    let waveOneHazard60 = [
        {
            Boss: 'Big Shot',
            Timing: 100,
            Spawn: 'C'
        },
        {
            Boss: 'Scrapper',
            Timing: 82,
            Spawn: 'B'
        },
        {
            Boss: 'Maws',
            Timing: 64,
            Spawn: 'C'
        },
        {
            Boss: 'Drizzler',
            Timing: 52,
            Spawn: 'C'
        },
        {
            Boss: 'Big Shot',
            Timing: 46,
            Spawn: 'B'
        },
        {
            Boss: 'Drizzler',
            Timing: 45,
            Spawn: 'B'
        },
        {
            Boss: 'Steel Eel',
            Timing: 28,
            Spawn: 'A'
        }
    ];
    return waveOneHazard60;
}

export default StartWaveButton;
