import {configureStore} from "@reduxjs/toolkit";

import weatherReducer from './weather'

export default configureStore({
    reducer: {
        weather: weatherReducer,
    }
})