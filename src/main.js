import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Page1(props) {
    const { setPage, userName, setUserName, pass, setPass } = props;

    return (
        <html>

            <head>
                <title>Page 1</title>
            </head>

            <body>
                <div>
                    <lable>User name: </lable>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)}></input>
                </div>
                <div>
                    <lable>Password: </lable>
                    <input type="password" value={pass} onChange={e => setPass(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={e => setPage(1)}>Next</button>
                </div>
            </body>

        </html>);
}

function Page2(props) {
    const { setPage, country, setCountery, city, setCity } = props;

    const [ cityKey, setCityKey ] = useState(0);

    const countriesAndCities = {
        Israel: ['Jerusalem', 'Tel Aviv', 'Raanana', 'Ramat Gan'],
        Jordan: ['Amman', 'Zarqa', 'Irbid', 'Aqaba'],
        Syria: ['Damascus', 'Hama', 'Idlib', 'Raqqa'],
        Egypt: ['Cairo', 'Alexandria', 'Giza'],
    };

    const countries = Object.keys(countriesAndCities);
    const cities = countriesAndCities[country];

    function replaceCountry(newCountry) {
        setCountery(newCountry);
        setCity(null);
        setCityKey(v => v+1);
    }

    return (
        <html>

            <head>
                <title>Page 2</title>
            </head>

            <body>
                <div>
                    <select value={country} onChange={(e) => replaceCountry(e.target.value)}>
                        <option disabled selected value>Please select a country</option>
                        {countries.map((country, index) => (
                            <option value={country}>{country}</option>
                        ))}
                    </select>

                    {cities &&
                        <select key={cityKey} value={city} onChange={(e) => setCity(e.target.value)}>
                            <option disabled selected value>Please select a city</option>
                            {cities.map((city, index) => (
                                <option value={city}>{city}</option>
                            ))}
                        </select>
                    }
                </div>
                <div>
                    <button onClick={e => setPage(0)}>Previous</button>
                    <button onClick={e => setPage(2)}>Next</button>
                </div>
            </body>

        </html>);
}

function Page3(props) {
    const { setPage, username, pass, country, city } = props;

    return (
        <html>

            <head>
                <title>Page 3</title>
            </head>

            <body>
                <div>
                    <lable>User name: {username}</lable>
                </div>
                <div>
                    <lable>Password: {pass}</lable>
                </div>
                <div>
                    <lable>Country: {country}</lable>
                </div>
                <div>
                    <lable>City: {city}</lable>
                </div>
                <button onClick={e => setPage(1)}>Previous</button>
            </body>

        </html>);
}

const App = () => {
    const [currentPage, setPage] = useState(0);
    const [userName, setUserName] = useState("");
    const [pass, setPass] = useState("");
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);


    return (
        <>
            <div className="App">
                {currentPage === 0 && <Page1 setPage={setPage} userName={userName} setUserName={setUserName} pass={pass} setPass={setPass}></Page1>}
                {currentPage === 1 && <Page2 setPage={setPage} country={country} setCountery={setCountry} city={city} setCity={setCity}></Page2>}
                {currentPage === 2 && <Page3 setPage={setPage} username={userName} pass={pass} country={country} city={city}></Page3>}
            </div>

        </>
    )
}

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
