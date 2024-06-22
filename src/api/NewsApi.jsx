import React from 'react'
import axios from 'axios'

const NewsApi = async(props) => {
    console.log(props);
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q=${props}&apiKey=d39f448a463143f1b74a844a7ee1ffdb`);
        return response.data;
    } catch (error) {
        console.log(error.message)
    }
}

export default NewsApi