import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Footer.scss';


const Footer = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`Footer ${darkMode ? 'dark' : 'light'}`}>
            <p> &copy; 2023 405Found</p>
      
        </div>
    )
}

export default Footer
