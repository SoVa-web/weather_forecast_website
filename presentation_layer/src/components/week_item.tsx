import WeatherItem from "./weather_item";
import map_alias from "./import_icons";
import vertical_line from "../data/icon/vertical_line.png"
import './styles/weather_content.scss'

function WeekItem(){
    return(
        <div className="weekItems" style={{display: 'grid'}}>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("first_day", "weather_week"))} 
                    time={get_data("first_day")} 
                    air_temp={get_temp("first_day", "weather_week")}
                    speed_wind={get_wind_speed("first_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("second_day", "weather_week"))} 
                    time={get_data("second_day")} 
                    air_temp={get_temp("second_day", "weather_week")}
                    speed_wind={get_wind_speed("second_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("three_day", "weather_week"))} 
                    time={get_data("three_day")} 
                    air_temp={get_temp("three_day", "weather_week")}
                    speed_wind={get_wind_speed("three_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("four_day", "weather_week"))}  
                    time={get_data("four_day")} 
                    air_temp={get_temp("four_day", "weather_week")}
                    speed_wind={get_wind_speed("four_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("five_day", "weather_week"))}  
                    time={get_data("five_day")} 
                    air_temp={get_temp("five_day", "weather_week")}
                    speed_wind={get_wind_speed("five_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("six_day", "weather_week"))}  
                    time={get_data("six_day")} 
                    air_temp={get_temp("six_day", "weather_week")}
                    speed_wind={get_wind_speed("six_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem 
                    name_icon={map_alias.get(get_img("seven_day", "weather_week"))}  
                    time={get_data("seven_day")} 
                    air_temp={get_temp("seven_day", "weather_week")}
                    speed_wind={get_wind_speed("seven_day", "weather_week")}></WeatherItem>
        </div>
    );
}

function get_img (time:string, period:string){
    let obj:string|null = localStorage.getItem('weather')
    let img:string = ""
    if (obj != null){
        img = JSON.parse(obj)[period][time].img
    }
    return img
}

function get_temp (time:string, period:string){
    let obj:string|null = localStorage.getItem('weather')
    let air_t:string = ""
    if (obj != null){
        air_t = JSON.parse(obj)[period][time].air_temp
    }
    return air_t
}

function get_data (time:string){
    let obj:string|null = localStorage.getItem('weather')
    let img:string = ""
    if (obj != null){
        img = JSON.parse(obj).weather_week[time].data
    }
    return img
}

function get_wind_speed(time:string, period:string){
    let obj:string|null = localStorage.getItem('weather')
    let w_s:string = ""
    if (obj != null){
        w_s = JSON.parse(obj)[period][time].speed_wind
    }
    return w_s
}

export default WeekItem;