import React from 'react';
import './input.scss';
import searchicon from '../../images/searchicon.png'

export default function Input(){

    return <div className='input-wrapper'>
      <img src={searchicon} alt='search' className='search-icon' />
      <input type="text" className='input' placeholder='Search'/>
    </div>
}