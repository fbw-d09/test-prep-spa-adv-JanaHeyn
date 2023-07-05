import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import LightSwitch from './components/LightSwitch';

import './App.scss'

function App() {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

  const value = { darkMode, toggleDarkMode }

  const country = {
    name: "South Africa",
    img: "https://de.wikipedia.org/wiki/Datei:Flag_of_South_Africa.svg",
    capital: "Pretoria",
    largestCity: "Johannesburg",
    population: 58048332,
    currency: "South African Rand (ZAR)",
    officialLanguages: ["Zulu", 
                        "Xhosa", 
                        "Afrikaans", 
                        "English", 
                        "Sepedi", 
                        "Swazi", 
                        "Sesotho",
                        "Setswana", 
                        "Xitsonga", 
                        "Tshiwenda", 
                        "Ndebele"
                      ],
    neighbouringCountries: ["Namibia", 
                            "Botswana",
                            "Zimbabwe", 
                            "Mozambique", 
                            "Eswatini"
                          ],
  };

  return (
    <>
      <ThemeContext.Provider value={ value }>
        <div className='App'>
            <Header/>
            <LightSwitch />
            <Card country={country}/>
            <Footer/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
