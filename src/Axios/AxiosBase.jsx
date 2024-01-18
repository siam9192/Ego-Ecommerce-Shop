import axios from 'axios';
import React from 'react';

const AxiosBase = () => {
    // https://ego-tech-shop-24hfym13i-siam-hasans-projects.vercel.app
    //ego-tech-shop-11f31hrei-siam-hasans-projects.vercel.app
    const base = axios.create({
        baseURL:'https://ego-tech-shop-rh7q7w6t3-siam-hasans-projects.vercel.app'
    })
    return base
}

export default AxiosBase;
