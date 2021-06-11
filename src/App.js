import {useState} from 'react';

import CitySearch from './components/CitySearch';
import TemperatureChart from './components/TemperatureChart';

import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherAsync, selectWeatherData, selectWeatherLoading} from "./store/weather";


const App = () => {
    const [error, setError] = useState(null);
    const [listWeather, setListWeather] = useState([]);

    const dispatch = useDispatch();
    const weatherRedux = useSelector(selectWeatherData);
    const loading = useSelector(selectWeatherLoading);

    const getWeather = (city) => {
        if(city === '') {
            return dispatch(setError('City is required!'));
        }
        dispatch(getWeatherAsync(city));
        setListWeather(weatherRedux);
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
            {loading ? 'Loading...' : <TemperatureChart list={listWeather} />}
        </div>
    );
};

export default App;
