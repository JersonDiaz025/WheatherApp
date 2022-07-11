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
            <div className="sub_container">
              <h1 className="font-bold text-2xl flex justify-start ">{name}</h1>
              <hr></hr>
              <span className="font-bold text-3xl text-blue-900">
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
