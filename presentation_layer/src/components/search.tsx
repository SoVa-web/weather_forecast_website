import ReactDom from 'react-dom';
import './styles/search.scss';
import fetch from 'cross-fetch'
import magnifier from '../data/icon/magnifier.png'
import config from '../config';
import showTodayWeater from './show_today_item'
import show_start_page from './show_start_page';


function Search(){
    return(
        <div className='block'>
            <div className='search'>
                    <input id="input_city" className='input_city'  type="text" placeholder='Enter name a region...'/>
                    <button className='search_button' onClick={onclick_serch}>
                        <img  style={{width:"30px", height:"30px", cursor:'pointer'}} src={magnifier} alt='search'></img>
                    </button>
            </div>
            <div id='city_name'></div>
        </div>
    );
    
}

const valid_characters:string = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm `''--"

async function onclick_serch(){
    const inputElement = document.getElementById('input_city') as HTMLInputElement
    let in_text:string = inputElement.value;
    let valid:boolean = false;
    let do_search:boolean = true;
    for (let i = 0; i < in_text.length; i++){
        valid = false;
        for (let k = 0; k < valid_characters.length; k++){
            if (valid_characters[k] === in_text[i]) valid = true;
        }
        if (valid === false){
            do_search = false;
            alert("Ohhh, we think you entered an invalid character. Try to correct the mistakes in word.")
            return
        }
    }
    if (do_search === true){
        await search_method()
    }
}


const search_method = async  ()=>{
    let city_name_en = `Weather in ${(document.getElementById('input_city') as HTMLInputElement).value}`
    const inputElement = document.getElementById('input_city') as HTMLInputElement
    let in_text = inputElement.value;
    localStorage.removeItem(config.key_local_storage)
    ReactDom.render(<p>{city_name_en}</p>,document.getElementById('city_name'))

    
    await fetch(`https://weathersovaappp.herokuapp.com/`, {
        mode: 'cors',
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({city:in_text})
    })
    .then(response => {
       return response.json()
    })
    .then(async (obj) => {
        console.log(obj)
        if (Object.keys(obj).length !== 0){
            if (localStorage.getItem(config.key_local_storage) != null){

                localStorage.setItem(config.key_local_storage, JSON.stringify(obj))
            }
            else localStorage.setItem(config.key_local_storage, JSON.stringify(obj))
            onclickToday()
        }
        else{
            show_start_page().then(()=>{showErrorOnEn()})
        }
    })
}


function onclickToday(){
    setTimeout(showTodayWeater, 1500)
}


function showErrorOnEn(){
    alert("Oops, sorry, there was an error. Try entering a different form of Region name.")
}

    

export default Search