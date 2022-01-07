import React from "react";
import './styles/weather_content.scss'
import vertical_line from '../data/icon/vertical_line.png'
import sun from '../data/icon/sun.png'
import snow from '../data/icon/snow.png'
import rain from '../data/icon/rain.png'
import cloudy from '../data/icon/cloudy.png'
import moon_cloudy from '../data/icon/moon_cloudy.png'
import moon from '../data/icon/moon.png'
import WeatherItem from "./weather_item";

const map_alias = new Map<string, string>([
    ["sun", sun],
    ["snow", snow],
    ["cloudy", cloudy],
    ["rain", rain],
    ["moon", moon],
    ["moon_cloudy", moon_cloudy]
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

function WeatherContent(){
    return(
        <div className="block-weather">
            <div className="weather-content">
                <div style={{display: 'flex'}}>
                    <button className="today" onClick={showTodayWeater}>Today</button>
                    <button className="week" onClick={showWeekWeater}>Week</button>
                </div>
                <div className="motto" style={{'alignItems':'center', 'display':'block'}}>
                    <p>The weather is no reason to be sad</p>
                </div>
                <div className="todayItems" style={{display: 'none'}}>
                    <WeatherItem name_icon={map_alias.get(get_img("2:00", "weather_today"))} time="2:00" air_temp={get_temp("2:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("5:00", "weather_today"))} time="5:00" air_temp={get_temp("5:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("8:00", "weather_today"))} time="8:00" air_temp={get_temp("8:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("11:00", "weather_today"))}  time="11:00" air_temp={get_temp("11:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("14:00", "weather_today"))}  time="14:00" air_temp={get_temp("14:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("17:00", "weather_today"))}  time="17:00" air_temp={get_temp("17:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("20:00", "weather_today"))}  time="20:00" air_temp={get_temp("20:00", "weather_today")}></WeatherItem>
                    <div><img style={{width:"1px", height:"350px", 'paddingTop': '15%'}} src={vertical_line} alt='vertical_line'></img></div>
                    <WeatherItem name_icon={map_alias.get(get_img("23:00", "weather_today"))}  time="23:00" air_temp={get_temp("23:00", "weather_today")}></WeatherItem>
                </div>
                <div className="weekItems" style={{display: 'none'}}>
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
                <div className="adv" style={{display: 'none'}}>
                    <p>{get_advice()}</p>
                </div>
            </div>
        </div>
    );
}

const showTodayWeater = () =>{
    Array.from(document.getElementsByClassName("todayItems"))[0].setAttribute("style", "display:grid")
    Array.from(document.getElementsByClassName("weekItems"))[0].setAttribute("style", "display:none")
    Array.from(document.getElementsByClassName("adv"))[0].setAttribute("style", "display:grid")
    Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:none")
}

const showWeekWeater = () =>{
    Array.from(document.getElementsByClassName("todayItems"))[0].setAttribute("style", "display:none")
    Array.from(document.getElementsByClassName("weekItems"))[0].setAttribute("style", "display:grid")
    Array.from(document.getElementsByClassName("adv"))[0].setAttribute("style", "display:none")
    Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:none")
}




export default WeatherContent



