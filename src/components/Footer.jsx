import React from 'react';

const Footer = ({data}) => {

    const { cloud, humidity, wind_kph, is_day, last_updated, precip_in, wind_mph } =
        data.current;
    return (
        <footer className='footer'>
            <div>
                <span className='span font-mono'>{precip_in} %</span>
                <span className='span'>Precipitation</span>
            </div>
            <div>
                <span className='span font-mono'>{humidity} %</span>
                <span className='span'>Humidity</span>
            </div>
            <div>
                <span className='span font-mono'>{wind_kph} km/h</span>
                <span className='span'>Wind</span>
            </div>
            <div>
                <span className='span font-mono'>{wind_mph} m/h</span>
                <span className='span'>Wind</span>
            </div>
        </footer>
    );
}

export default Footer;
