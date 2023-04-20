import React from 'react';
import { Link } from 'react-router-dom'
import './characterCard.scss'
import { CharacterModel } from '../../feature/models';

interface CharacterCardProps {
  character: CharacterModel
}

export default function CharacterCard(props: CharacterCardProps) {
  const {
    character
  } = props

  const {
    id,
    name,
    gender,
    species,
    image,
    location,
    firstEpisode,
  } = character

  return <div className='card-wrapper'>
    <Link to={`characters/${id}`} style={{ textDecoration: 'none' }}>
      <img src={image} alt='charImg' />
    </Link>
    <div className='char-info'>
      <div className='char-info-main'>
        <Link to={`characters/${id}`} style={{ textDecoration: 'none', color: "white" }}>
          <h2>{name}</h2>
        </Link>
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