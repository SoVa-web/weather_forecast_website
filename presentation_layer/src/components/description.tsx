import React from 'react';
import './styles/weather_item.scss';


const DescriptionItem = ()=>{
    return(
        <div>
            <div>
                <p className='item'>Descr.</p>
            </div>
            <div>
                <p className='item'>-</p>
            </div>
            <div>
                <p className='item'>Temp.</p>
            </div>
            <div>
                <p className='item'>Wind</p>
            </div>
            <div>
                <p className='item'>Humd.</p>
            </div>
            <div>
                <p className='item'>Prob.</p>
            </div>
        </div>
       
    );
}

export default DescriptionItem
