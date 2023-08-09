import React from 'react';
import './error.scss'
import errorimg from '../../images/error.png'

interface ErrorComponentProps {
    errorMessage: string
}

export default function ErrorComponent(props: ErrorComponentProps) {

    const{
        errorMessage
    } = props

    return <div className='error-wrapper'>
        <img className='error-img' src={errorimg}/>
        <p>{errorMessage}</p>
    </div>
}