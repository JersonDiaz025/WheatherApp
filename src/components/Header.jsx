import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Content";

const Header = () => {

    const [data, setData] = useState();

    const [valueIn, setValueIn] = useState([]);

    /* It's a state that stores the value of the input. */
    const [dataIn, SetDataIn] = useState();

    /**
     * It's a function that uses the axios library to make a GET request to the RapidAPI weather API.
     */
    const getWeatherInfo = () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: `${dataIn ? dataIn.trim() : "Santo Domingo"}` },
        headers: {
          "X-RapidAPI-Key":
            "579ae66bdbmshcfed995c98bdc49p1d3fb4jsn2d513f25d7a7",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };
      try {
        axios.request(options)
        .then((response) => {
          setData(response.data);
        });
      } catch (error) {
        console.log(error)
      }

    }
    useEffect(() => {
      getWeatherInfo()
    }, [valueIn])


   /**
    * When the form is submitted, prevent the default action, then if the value of the input is greater
    * than 0, set the value of the dataIn state to the value of the input, and set the value of the
    * input to an empty string.
    */
    const handleSubmit = (e) => {
      e.preventDefault();
      if (valueIn.length > 0) {
        SetDataIn(e.target[0].value);
        setValueIn("");
      }
    };

   /**
    * When the value of the input changes, set the value of the state to the value of the input.
    */
    const handleChange = (e) => {
      setValueIn(e.target.value);
    };

    return (
      <div className='container-form  bg-gradient-to-r from-indigo-100 to-[#a6d0e4] ...'>
        <form
          className="header"
          onSubmit={handleSubmit}
        >
          <h2 className="font-sans font-bold text-xl">Check the weather in your city</h2>
          <input
            className="input"
            // pattern="[a-z]*"
            type="text"
            placeholder="Write a region or country"
            value={valueIn}
            onChange={handleChange}
          />
          <div className='container-btn'>
            <button type="submit" className='button font-bold transition duration-700 ease-in-out'>Send</button>
          </div>
        </form>
        <Content data={data} />
      </div>
    );
}

export default Header;