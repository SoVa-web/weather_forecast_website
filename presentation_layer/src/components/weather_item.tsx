import React from 'react';
import './styles/weather_item.scss';

interface WeatherItemProps{
    time:string,
    name_icon:string|undefined,
    air_temp:string,
    speed_wind:string,
    humidity:string,
    prob:string
}

const WeatherItem: React.FC<WeatherItemProps> = (
    {
        time,
        name_icon,
        air_temp,
        speed_wind,
        humidity,
        prob
    }
)=>{
    return(
        <div>
            <div className='item' >
                <p>{time}</p>
            </div>
            <div>
                <img style={{width:"30px", height:"30px", cursor:'pointer', margin:'0'}} src={name_icon} alt={name_icon}></img>
            </div>
            <div className='item'>
                <p >{air_temp}</p>
            </div>
            <div className='item'>
                <p>{speed_wind}</p>
            </div>
            <div className='item'>
                <p>{humidity}</p>
            </div>
            <div className='item'>
                <p>{prob}</p>
            </div>
        </div>
       
    );
}

export default WeatherItem
