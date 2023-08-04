import React from 'react';
import './loader.scss'
import loader from '../../images/loader.png'


export default function Loader() {

    return <div className='loader-wrapper'>
        <img src={loader} className='loader-img' />
    </div>
}