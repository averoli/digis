import {createSlice} from "@reduxjs/toolkit";

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

export const slice = createSlice({
    name: 'weather',
    initialState: {
        data: {},
        loading: false,
        error: null
    },
    reducers: {
        fetchWeather: state => ({
            ...state,
            loading: true
        }),
        fetchWeatherResolve: (state, action) => ({
            ...state,
            data: action.payload,
            loading: false,
            error: ''
        }),
        fetchWeatherReject: (state, action) => ({
            ...state,
            error: action.payload,
            loading: false
        })
    }
})

export const {fetchWeather, fetchWeatherReject, fetchWeatherResolve} = slice.actions;

export const selectWeatherLoading = state => state.weather.loading;
export const selectWeatherData = state => state.weather.data;

export const getWeatherAsync = (city) => async (dispath) => {
    dispath(fetchWeather());
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
    dispath(fetchWeatherResolve(data))
}

export default slice.reducer;