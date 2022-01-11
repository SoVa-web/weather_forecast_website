import WeatherItem from "./weather_item";
import vertical_line from '../data/icon/vertical_line.png'
import map_alias from "./import_icons";
import './styles/weather_content.scss'
import ReaderJSON from "./reader_json";

function TodayItem(){
    return(
        <div className="todayItems" style={{display: 'grid'}}>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("03:00:00", "weather_today"))} 
                    time="03:00" 
                    air_temp={reader.get_temp("03:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("03:00:00", "weather_today")}
                    humidity={reader.get_humidity("03:00:00", "weather_today")}
                    prob={reader.get_prob("03:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("06:00:00", "weather_today"))} 
                    time="06:00" 
                    air_temp={reader.get_temp("06:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("06:00:00", "weather_today")}
                    humidity={reader.get_humidity("06:00:00", "weather_today")}
                    prob={reader.get_prob("06:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("09:00:00", "weather_today"))} 
                    time="09:00" 
                    air_temp={reader.get_temp("09:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("09:00:00", "weather_today")}
                    humidity={reader.get_humidity("09:00:00", "weather_today")}
                    prob={reader.get_prob("09:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("12:00:00", "weather_today"))}  
                    time="12:00" 
                    air_temp={reader.get_temp("12:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("12:00:00", "weather_today")}
                    humidity={reader.get_humidity("12:00:00", "weather_today")}
                    prob={reader.get_prob("12:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("15:00:00", "weather_today"))}  
                    time="15:00" 
                    air_temp={reader.get_temp("15:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("15:00:00", "weather_today")}
                    humidity={reader.get_humidity("15:00:00", "weather_today")}
                    prob={reader.get_prob("15:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("18:00:00", "weather_today"))}  
                    time="18:00" 
                    air_temp={reader.get_temp("18:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("18:00:00", "weather_today")}
                    humidity={reader.get_humidity("18:00:00", "weather_today")}
                    prob={reader.get_prob("18:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("21:00:00", "weather_today"))}  
                    time="21:00" 
                    air_temp={reader.get_temp("21:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("21:00:00", "weather_today")}
                    humidity={reader.get_humidity("21:00:00", "weather_today")}
                    prob={reader.get_prob("21:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(reader.get_img("00:00:00", "weather_today"))}  
                    time="00:00" 
                    air_temp={reader.get_temp("00:00:00", "weather_today")}
                    speed_wind={reader.get_wind_speed("00:00:00", "weather_today")}
                    humidity={reader.get_humidity("00:00:00", "weather_today")}
                    prob={reader.get_prob("00:00:00", "weather_today")}></WeatherItem>
        </div>
    );
}

const reader = new ReaderJSON();

export default TodayItem;