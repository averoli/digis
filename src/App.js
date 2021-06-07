import CitySearch from "./components/search/CitySearch";
import TemperatureChart from "./components/chart/TemperatureChart";

import s from './App.css'


const API_key = "bad46dfee1ae1125ec4faf31e63449de";

const App = () => {

    const gettingWeather = async () => {
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q={city_name}&appid={API_key}`)
        const data = await api_url.json();
        console.log('####: data', data)
    }

    return (
        <div className={s.root}>
            <CitySearch gettingWeather={gettingWeather}/>
            <TemperatureChart/>
        </div>
    );
}

export default App;
