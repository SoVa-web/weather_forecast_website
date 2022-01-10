import ReactDOM from "react-dom";
import './styles/weather_content.scss';

const show_start_page = async  () =>{
        ReactDOM.render(<></>, document.getElementById("todayItems"));
        ReactDOM.render(<></>, document.getElementById("advice"));
        ReactDOM.render(<></>, document.getElementById("weekItems"));
        Array.from(document.getElementsByClassName("motto"))[0].setAttribute("style", "display:block")
}

export default show_start_page;
