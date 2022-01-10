import ReactDOM from "react-dom";
import WeekItem from "./week_item";
import config from "../config";

const showWeekWeater = () =>{
    if (localStorage.getItem(config.key_local_storage) != null){
        ReactDOM.render(<WeekItem/>, document.getElementById("weekItems"));
        ReactDOM.render(<></>, document.getElementById("advice"));
        ReactDOM.render(<></>, document.getElementById("todayItems"));
        Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:none")
    }
}

export default showWeekWeater