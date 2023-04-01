import React from 'react';
import './header.scss'
import rnmlogo from '../../images/rnmlogo.png'

export default function Header(){

    return <header className='head-wrapper'>
     <div>
        <img src={rnmlogo} alt="rnmlogo" className='logo'/>
     </div>
    </header>
}
