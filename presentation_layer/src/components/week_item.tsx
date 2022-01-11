import WeatherItem from "./weather_item";
import map_alias from "./import_icons";
import vertical_line from "../data/icon/vertical_line.png"
import './styles/weather_content.scss'
import ReaderJSON from "./reader_json";
import DescriptionItem from "./description";

function WeekItem(){
    return(
        <div className="weekItems" style={{display: 'grid'}}>
                <DescriptionItem></DescriptionItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("first_day", "weather_week"))} 
                        time={reader.get_data("first_day")} 
                        air_temp={reader.get_temp("first_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("first_day", "weather_week")}
                        humidity={reader.get_humidity("first_day", "weather_week")}
                        prob={reader.get_prob("first_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("second_day", "weather_week"))} 
                        time={reader.get_data("second_day")} 
                        air_temp={reader.get_temp("second_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("second_day", "weather_week")}
                        humidity={reader.get_humidity("second_day", "weather_week")}
                        prob={reader.get_prob("second_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("three_day", "weather_week"))} 
                        time={reader.get_data("three_day")} 
                        air_temp={reader.get_temp("three_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("three_day", "weather_week")}
                        humidity={reader.get_humidity("three_day", "weather_week")}
                        prob={reader.get_prob("three_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("four_day", "weather_week"))}  
                        time={reader.get_data("four_day")} 
                        air_temp={reader.get_temp("four_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("four_day", "weather_week")}
                        humidity={reader.get_humidity("four_day", "weather_week")}
                        prob={reader.get_prob("four_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("five_day", "weather_week"))}  
                        time={reader.get_data("five_day")} 
                        air_temp={reader.get_temp("five_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("five_day", "weather_week")}
                        humidity={reader.get_humidity("five_day", "weather_week")}
                        prob={reader.get_prob("five_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("six_day", "weather_week"))}  
                        time={reader.get_data("six_day")} 
                        air_temp={reader.get_temp("six_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("six_day", "weather_week")}
                        humidity={reader.get_humidity("six_day", "weather_week")}
                        prob={reader.get_prob("six_day", "weather_week")}></WeatherItem>
                <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                <WeatherItem 
                        name_icon={map_alias.get(reader.get_img("seven_day", "weather_week"))}  
                        time={reader.get_data("seven_day")} 
                        air_temp={reader.get_temp("seven_day", "weather_week")}
                        speed_wind={reader.get_wind_speed("seven_day", "weather_week")}
                        humidity={reader.get_humidity("seven_day", "weather_week")}
                        prob={reader.get_prob("seven_day", "weather_week")}></WeatherItem>
        </div>
    );
}

const reader = new ReaderJSON();

export default WeekItem;