import ReactDOM from "react-dom";
import TodayItem from "./today_item";
import './styles/weather_content.scss';
import config from "../config";

const showTodayWeater = () =>{
    if (localStorage.getItem(config.key_local_storage) != null){
        ReactDOM.render(<TodayItem/>, document.getElementById("todayItems"));
        ReactDOM.render(<div className="adv" style={{display: 'block'}}><p>{get_advice()}</p></div>, document.getElementById("advice"));
        ReactDOM.render(<></>, document.getElementById("weekItems"));
        Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:none")
    }
}


function get_advice(){
    let obj:string|null = localStorage.getItem('weather')
    let advice:string = ""
    if (obj != null){
        advice = JSON.parse(obj).weather_today.today_advice
    }
    return advice
}


export default showTodayWeater