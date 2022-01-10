import React from "react";
import ReactDOM from "react-dom";
import './styles/weather_content.scss'
import vertical_line from '../data/icon/vertical_line.png'
import clear from '../data/icon/clear.png'
import snow from '../data/icon/snow.png'
import rain from '../data/icon/rain.png'
import cloudy from '../data/icon/cloudy.png'
import moon_cloudy from '../data/icon/moon_cloudy.png'
import moon from '../data/icon/moon.png'
import storm from '../data/icon/storm.png'
import WeatherItem from "./weather_item";

function WeatherContent(){
    return(
        <div className="block-weather">
            <div id="weather-content" className="weather-content">
                <div style={{display: 'flex'}}>
                    <button className="today" onClick={showTodayWeater}>Today</button>
                    <button className="week" onClick={showWeekWeater}>Week</button>
                </div>
                <div id="motto" className="motto" style={{'alignItems':'center', 'display':'block'}}>
                    <p>The weather is no reason to be sad</p>
                </div>
                <div id="todayItems">
                </div>
                <div id="weekItems">
                </div>
                <div id="advice">
                </div>
                
            </div>
        </div>
    );
}

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

function WeekItem(){
    return(
        <div className="weekItems" style={{display: 'grid'}}>
            <WeatherItem name_icon={map_alias.get(get_img("first_day", "weather_week"))} time={get_data("first_day")} air_temp={get_temp("first_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("second_day", "weather_week"))} time={get_data("second_day")} air_temp={get_temp("second_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("three_day", "weather_week"))} time={get_data("three_day")} air_temp={get_temp("three_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("four_day", "weather_week"))}  time={get_data("four_day")} air_temp={get_temp("four_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("five_day", "weather_week"))}  time={get_data("five_day")} air_temp={get_temp("five_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("six_day", "weather_week"))}  time={get_data("six_day")} air_temp={get_temp("six_day", "weather_week")}></WeatherItem>
            <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
            <WeatherItem name_icon={map_alias.get(get_img("seven_day", "weather_week"))}  time={get_data("seven_day")} air_temp={get_temp("seven_day", "weather_week")}></WeatherItem>
        </div>
    );
}

const showTodayWeater = () =>{
    ReactDOM.render(<TodayItem/>, document.getElementById("todayItems"));
    ReactDOM.render(<div className="adv" style={{display: 'none'}}><p>{get_advice()}</p></div>, document.getElementById("advice"));
    ReactDOM.render(<></>, document.getElementById("weekItems"));
    Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:none")
}

const showWeekWeater = () =>{
    ReactDOM.render(<WeekItem/>, document.getElementById("weekItems"));
    ReactDOM.render(<></>, document.getElementById("advice"));
    ReactDOM.render(<></>, document.getElementById("todayItems"));
}


const map_alias = new Map<string, string>([
    ["clear", clear],
    ["snow", snow],
    ["cloudy", cloudy],
    ["rain", rain],
    ["moon", moon],
    ["moon_cloudy", moon_cloudy],
    ["storm", storm]
]);

function get_data (time:string){
    let obj:string|null = localStorage.getItem('weather')
    let img:string = ""
    if (obj != null){
        img = JSON.parse(obj).weather_week[time].data
    }
    return img
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

function get_advice(){
    let obj:string|null = localStorage.getItem('weather')
    let advice:string = ""
    if (obj != null){
        advice = JSON.parse(obj).weather_today.today_advice
    }
    return advice
}



export default WeatherContent



