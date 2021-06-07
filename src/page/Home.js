import CitySearch from "../components/search/CitySearch";
import TemperatureChart from "../components/chart/TemperatureChart";

import s from './Home.module.css';

const Home = () => {
    return (
    <div className={s.root}>
        <CitySearch/>
        <TemperatureChart/>
    </div>
    )
}


export default Home