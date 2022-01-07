import React from 'react';
import './styles/search.scss';
import fetch from 'cross-fetch'
import magnifier from '../data/icon/magnifier.png'

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
       return response
    })
    .then(obj => console.log(obj))//there shoud be adding to the localStorage
}
export default Search