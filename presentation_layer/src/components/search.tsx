import React from 'react';
import './styles/search.scss';
import magnifier from '../data/icon/magnifier.png'

function Search(){
    return(
        <div className='block'>
            <div className='search'>
                <input className='input_city'  type="text" placeholder='Enter name a region...'/>
                <button className='search_button' onClick={search_method}><img  style={{width:"30px", height:"30px", cursor:'pointer'}} src={magnifier} alt='search'></img></button>
            </div>
        </div>
    );
    
}


const search_method = ()=>{
    console.log("serach")
}
export default Search