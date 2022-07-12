import React from 'react';
import Footer from './Footer';
import Loader from './Loader';

const Content = ({data}) => {
    if (data) {
      /* Destructuring the data object. */
      const { code, icon, text } = data.current.condition;
      const { temp_c, is_day } = data.current;
      const { name, country, localtime } = data.location;

      return (
        <div className="w-100 content bg-gradient-to-r from-indigo-100 to-[#91c4db]">
          <div className="flex flex-col">
            <div className='w-100 flex justify-start items-center mt-10'>
              <h1 className="font-bold text-4xl">{name}</h1>
              <span className='ml-10 font-mono'>{localtime}</span>
            </div>
            <hr className="w-100 bg-[#1e293b] h-1"></hr>
            <div className='flex justify-start items-start flex-col mt-2'>
              <span className="font-bold text-5xl text-blue-900">
                {temp_c} °C
                <span className='ml-14 text-2xl font-mono'>{text}</span>
              </span>
              <img src={icon} alt="image whather" className="w-28 h-28" />
            </div>
            <div className='flex justify-center items-center mb-4'>
              <h2 className='text-2xl font-mono'>{country}</h2>
            </div>
            <Footer data={data} />
          </div>
        </div>
      );
    } else {
      return <Loader />;
  }
}

export default Content;
