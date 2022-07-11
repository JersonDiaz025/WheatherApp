import axios from "axios";
import { useState, useEffect } from "react";
import Content from "./Content";


const Header = () => {

    const [data, setData] = useState();

    const [valueIn, setValueIn] = useState([]);

    const [dataIn, SetDataIn] = useState();

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
      axios.request(options).then((response) => {
        setData(response.data);
      });
    };
    
    useEffect(() => {
        getWeatherInfo()
    }, [valueIn])


    const handleSubmit = (e) => {
      e.preventDefault();
      if (valueIn.length > 0) {
        SetDataIn(e.target[0].value);
        setValueIn("");
      }
    };

    const handleChange = (e) => {
      setValueIn(e.target.value);
    };

    return (
      <div className='container-form'>
          <form
            className="header"
            onSubmit={handleSubmit}
          >
            <h2>Write a region</h2>
            <input
              className="input"
              pattern="[a-z]*"
              type="text"
            //   placeholder="Write a region"
              value={valueIn}
              onChange={handleChange}
            />
            <div className='container-btn'>
                <button type="submit" className='button'>Send</button>
            </div>
          </form>   
        {/* <Content data={data} /> */}
      </div>
    );
}

export default Header;