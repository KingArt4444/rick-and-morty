import React from 'react';
import {Link} from 'react-router-dom'
import './header.scss'
import rnmlogo from '../../images/rnmlogo.png'

export default function Header(){

    return <header className='head-wrapper'>
     <div>
        <Link to={'/'}>
        <img src={rnmlogo} alt="rnmlogo" className='logo'/>
        </Link>
     </div>
    </header>
}
