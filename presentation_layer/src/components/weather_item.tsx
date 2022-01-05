import React from 'react';
import './styles/weather_item.scss';

interface WeatherItemProps{
    time:string,
    name_icon:string|undefined,
    air_temp:string
}

const WeatherItem: React.FC<WeatherItemProps> = (
    {
        time,
        name_icon,
        air_temp
    }
)=>{
    return(
        <div>
            <div>
                <p>{time}</p>
            </div>
            <div>
                <img style={{width:"30px", height:"30px", cursor:'pointer', margin:'0'}} src={name_icon} alt={name_icon}></img>
            </div>
            <div>
                <p>{air_temp}</p>
            </div>
        </div>
       
    );
}

export default WeatherItem
