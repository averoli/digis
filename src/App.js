import CitySearch from './components/CitySearch';
import TemperatureChart from './components/TemperatureChart';

import s from './App.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherAsync, selectWeatherError, selectWeatherList, selectWeatherLoading} from "./store/weather";


const App = () => {
    const dispatch = useDispatch();
    const weatherListSelector = useSelector(selectWeatherList);
    const loading = useSelector(selectWeatherLoading);
    const error = useSelector(selectWeatherError);

    const handleSearch = (city) => {
        dispatch(getWeatherAsync(city))
    };

    return (
        <div className={s.root}>
            <CitySearch onSearch={handleSearch}/>
            {error && !loading && (
                <div className={s.error}>
                    {error?.message}
                </div>
            )}
            {loading ? 'Loading...' : <TemperatureChart list={weatherListSelector}/>}
        </div>
    );
};

export default App;
