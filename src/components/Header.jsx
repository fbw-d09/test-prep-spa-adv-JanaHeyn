import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Header.scss';

const Header = () => {
    const { darkMode } = useContext(ThemeContext);
    console.log('Header:', darkMode);

    return (
        <div className={`Header ${darkMode ? 'dark' : 'light'}`}>
            <h1>Countries of the world</h1>
        </div>
    )
}

export default Header
