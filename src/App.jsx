import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import './App.scss'

function App() {

  const [ darkMode, setDarkMode ] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

  const value = { darkMode, toggleDarkMode }

  const country = {
    name: "South Africa",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1599px-Flag_of_South_Africa.svg.png",
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
            <button onClick={toggleDarkMode}>Switch mode</button>
            <Card country={country}/>
            <Footer/>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
