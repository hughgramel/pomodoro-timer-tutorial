// React component for Timer
// Import react-circular-progressbar
// npm install --save react-circular-progressbar
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
import PauseButton from './PauseButton';
import PlayButton from './PlayButton';


const red = 'f54e4e'
const green = '4aec8c'

function Timer() {
    const [percentage, setPercentage] = useState(0);

    return (
        <div>
            <CircularProgressbar value={60} text={`${percentage}%`} styles={buildStyles({
                textColor: '#fff',
                pathColor: red,
                trailColor:'rgba(255,255,255,.2)',
            })}/>
            <div style= {{marginTop: '20px'}}>
                <PlayButton/>
                <PauseButton/>
            </div>
        </div>
    )
}

export default Timer;`

function useState(arg0: number): [any, any] {
    throw new Error('Function not implemented.');
}
`