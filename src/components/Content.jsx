import React from 'react';
import Loader from './Loader';


const Content = ({data}) => {
    if (data) {
      const { code, icon, text } = data.current.condition;
      const { cloud, humidity, is_day, temp_c, temp_f, last_updated } =
        data.current;
      const { name, country, localtime } = data.location;

      return (

          <div className="content">
            <div className="mt-10  flex-row w-100">
              <h1 className="font-bold">{name}</h1>
              <span className="font-bold flex flex-col text-3xl text-blue-900">
                {temp_c} °C
              </span>
              <img src={icon} alt="image whather" className="w-28 h-28" />
            </div>
            <hr className="w-100 text-blue-900 leading-3"></hr>
          </div>
      );
    } else {
      return <Loader />;
  }
}

export default Content;
