import React from 'react';
import './Main.scss'
import CharacterCard from '../../components/CharacterCard';
import Input from '../../components/Input';

export default function MainPage(){

    return <div className='wrapper'>
        <Input />
        <div className='card-field-wrapper'>
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </div>
    </div>
}