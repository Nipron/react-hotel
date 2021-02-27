import React from 'react';
import * as axios from 'axios';

const weatherInstance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
});

export const weatherAPI = {
    getWeather(city = 'Kyiv') {
        return weatherInstance.get(`weather?q=HradecKralove&appid=fa65020783637f29a81de704289519e0`)
            .then(response => {
                return response.data
            });
    }
};





