import { useState } from 'react';

import CitySearch from './components/CitySearch';
import TemperatureChart from './components/TemperatureChart';

import s from './App.module.css';

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

const App = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [listWeather, setListWeather] = useState([]);

    const getWeather = async (city) => {
        setError(null);
        setLoading(true);
        try {
            const data = await
                fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`).then(res => res.json());
            if (Number(data.cod) !== 200) {
                throw data;
            }
            setListWeather(data.list);
            setError(null);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (city) => {
        getWeather(city);
    };

    return (
        <div className={s.root}>
            <CitySearch onSearch={handleSearch} />
            { error && (
                <div className={s.error}>
                    {error}
                </div>
            )}
            {isLoading ? 'Loading...' : <TemperatureChart list={listWeather} />}
        </div>
    );
};

export default App;
