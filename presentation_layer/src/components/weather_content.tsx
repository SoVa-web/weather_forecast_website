import './styles/weather_content.scss'
import showWeekWeater from "./show_week_item";
import showTodayWeater from "./show_today_item";

function WeatherContent(){
    return(
        <div className="block-weather">
            <div id="weather-content" className="weather-content">
                <div style={{display: 'flex'}}>
                    <button className="today" onClick={onclickToday}>Today</button>
                    <button className="week" onClick={onclickWeek}>Week</button>
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


function onclickToday(){
    setTimeout(showTodayWeater, 1000)
}

function onclickWeek(){
    setTimeout(showWeekWeater, 1000)
}

export default WeatherContent;



