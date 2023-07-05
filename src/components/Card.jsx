import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import './Card.scss';

const Card = ({ country }) => {
    const { darkMode } = useContext(ThemeContext);
    // console.log('Darkmode:', darkMode);


    return (
        <div className={`Card ${darkMode ? 'dark' : 'light'}`}>
            <h2>{country.name}</h2>
            <img src={country.img} alt='sa-flag' />
            <div className="Card__infos">
                <p>Capital: {country.capital}</p>
                <p>Largest City: {country.largestCity}</p>
                <p>Population: {country.population}</p>
                <p>Currency: {country.currency}</p>
            </div>

            <div className="Card__lists">
                <div className="Card__lists__language">
                    <h4>Offical languages:</h4>
                    <ul>
                        {
                            country.officialLanguages.map((language, index) => {
                                return <li key={index}>{language}</li>
                            })
                        }
                    </ul>
                </div>

                <div className="Card__lists__neighbours">
                    <h4>Neighbor Countries:</h4>
                    <ul>
                        {
                            country.neighbouringCountries.map((neightbourCountry, index) => {
                                return <li key={index}>{neightbourCountry}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Card
