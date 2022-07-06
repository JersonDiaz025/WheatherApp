import React from 'react';

const Content = (data) => {
    const { name, country, localtime, icon, cloud } = data;
    return (
        <div className='w-100 flex justify-center mt-10'>
            <div className='bg-zinc-300 rounded-2xl w-2/5 box-border h-96 flex justify-center'>
                <div className='mt-10  flex-row w-100'>
                    <h1 className='font-bold'>{name}</h1>
                    <span className='font-bold flex flex-col text-3xl text-blue-900'>{cloud} °C</span>
                    
                    <img src={icon} alt='image whather' className='w-28 h-28'/>
                </div>
                <hr className='w-100 text-blue-900 leading-3'></hr>
            </div>
        </div>
    );
}

export default Content;
