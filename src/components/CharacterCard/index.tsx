import React from 'react';
import './characterCard.scss'
import { CharacterModel} from '../../feature/models';

interface CharacterCardProps {
  character: CharacterModel
}

export default function CharacterCard(props: CharacterCardProps) {
  const {
    character
  } = props

  const {
    name,
    gender,
    species,
    image,
    location,
    firstEpisode,
  } = character

  return <div className='card-wrapper'>
    <img src={image} alt='charImg' />
    <div className='char-info'>
      <div className='char-info-main'>
        <h2>{name}</h2>
        <span>{gender} - {species}</span>
      </div>
      <div className='char-info-location'>
        <span>Last known location</span>
        <a>{location.name}</a>
      </div>
      <div className='char-info-episode'>
        <span>First seen in</span>
        <a>{firstEpisode.name}</a>
      </div>
    </div>
  </div>
}