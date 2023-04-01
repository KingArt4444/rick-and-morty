import React from 'react';
import'./characterCard.scss'
import tempcharimg from '../../images/tempcharimg.jpg'

export default function CharacterCard(){

    return <div className='card-wrapper'>
          <img src={tempcharimg} alt='charImg' />
          <div className='char-info'>
            <div className='char-info-main'>
              <h2>Seth Freaking Rollins</h2>  {/*{Name}*/}
              <span>Male - Booster</span> {/*{Gender} - {Species}*/}
            </div>
            <div className='char-info-location'>
              <span>Last known location</span>
              <a>Dota 2</a> {/*{Location}*/}
            </div>
            <div className='char-info-episode'>
              <span>First seen in</span>
              <a>Ermolovich&#39;s Dungeon</a>  {/*{firstEpisode}*/}
            </div>
          </div>
        </div>
}