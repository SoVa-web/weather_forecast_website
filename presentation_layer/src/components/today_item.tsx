import WeatherItem from "./weather_item";
import vertical_line from '../data/icon/vertical_line.png'
import map_alias from "./import_icons";
import './styles/weather_content.scss'

function TodayItem(){
    return(
        <div className="todayItems" style={{display: 'grid'}}>
            <WeatherItem name_icon={map_alias.get(get_img("03:00:00", "weather_today"))} time="03:00" air_temp={get_temp("03:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("06:00:00", "weather_today"))} time="06:00" air_temp={get_temp("06:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("09:00:00", "weather_today"))} time="09:00" air_temp={get_temp("09:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("12:00:00", "weather_today"))}  time="12:00" air_temp={get_temp("12:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("15:00:00", "weather_today"))}  time="15:00" air_temp={get_temp("15:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("18:00:00", "weather_today"))}  time="18:00" air_temp={get_temp("18:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("21:00:00", "weather_today"))}  time="21:00" air_temp={get_temp("21:00:00", "weather_today")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("00:00:00", "weather_today"))}  time="00:00" air_temp={get_temp("00:00:00", "weather_today")}></WeatherItem>
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

export default TodayItem;