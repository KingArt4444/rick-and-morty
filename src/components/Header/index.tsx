import React from 'react';
import './header.scss'
import rnmlogo from '../../images/rnmlogo.png'
import Input from '../Input';

export default function Header(){

    return <div className='head-wrapper'>
     <div>
        <img src={rnmlogo} alt="rnmlogo" className='logo'/>
     </div>
    </div>
}
