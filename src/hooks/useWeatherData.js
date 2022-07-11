import { useEffect, useState } from "react";
import axios from 'axios';

/**
 * It returns the data from the API call
 * @returns The data is being returned as an object.
 */
export const getWeatherInfo = () => {


    /* Creating a state variable called data and a function called setData. */
    const [data, setData] = useState();

    useEffect(() => {

        const options = {
          method: 'GET',
          url: 'https://weatherapi-com.p.rapidapi.com/current.json',
          params: {q: `${dataIn? dataIn.trim(): 'Santo Domingo'}`},
          headers: {
            'X-RapidAPI-Key': '579ae66bdbmshcfed995c98bdc49p1d3fb4jsn2d513f25d7a7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
          }
        };
        axios.request(options)
        .then((response) => {
          setData(response.data);
        })

      }, [])

    return data
}
