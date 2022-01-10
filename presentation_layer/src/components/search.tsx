import React from 'react';
import './styles/search.scss';
import fetch from 'cross-fetch'
import magnifier from '../data/icon/magnifier.png'
import config from '../config';


function Search(){
    return(
        <div className='block'>
            <div className='search'>
                    <input id="input_city" className='input_city'  type="text" placeholder='Enter name a region...'/>
                    <button className='search_button' onClick={search_method}>
                        <img  style={{width:"30px", height:"30px", cursor:'pointer'}} src={magnifier} alt='search'></img>
                    </button>
            </div>
        </div>
    );
    
}


const search_method = async  ()=>{
    const inputElement = document.getElementById('input_city') as HTMLInputElement
    let in_text = inputElement.value;
    
    
    await fetch(`http://localhost:5000/`, {
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
    .then(obj => {
        console.log(obj)
        if (Object.keys(obj).length !== 0){
            add_html_pred()
            if (localStorage.getItem(config.key_local_storage) != null){
                localStorage.removeItem(config.key_local_storage)
                localStorage.setItem(config.key_local_storage, JSON.stringify(obj))
            }
            else localStorage.setItem(config.key_local_storage, JSON.stringify(obj))
        } 
    })
}


function add_html_pred(){
    
}
        

export default Search