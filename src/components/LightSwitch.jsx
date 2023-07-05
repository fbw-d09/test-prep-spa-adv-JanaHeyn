import React, {useContext} from 'react';
import { ThemeContext } from '../ThemeContext';

const LightSwitch = () => {
    const {darkMode, toggleDarkMode } = useContext(ThemeContext);

    return(
        <div className='LightSwitch'>
            <button onClick={toggleDarkMode}>Switch Mode</button>
        </div>
    )
}

export default LightSwitch
