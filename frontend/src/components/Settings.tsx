import { useContext } from 'react';
import SettingsContext from './SettingsContext';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <div style={{textAlign: 'left'}}>
            <label>Work: {settingsInfo.workMinutes}:00</label>
            <label>Break: {settingsInfo.breakMinutes}:00 </label>
            {/* <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                min={1}
                max={120}
             />
            <label>Break: {settingsInfo.breakMinutes}:00</label>
            <ReactSlider 
                className={'slider green'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                min={1}
                max={120}
             /> */}
        </div>
    );  
}

export default Settings;