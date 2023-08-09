import React, { useEffect } from 'react';
import './Character.scss'
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../feature/hooks';
import { fetchCharacterById } from '../../feature/slices/characterSlice';
import { CharacterModel } from '../../feature/models';
import Loader from '../../components/Loader';
import ErrorComponent from '../../components/ErrorComponent';

export default function CharacterPage() {
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const character: CharacterModel = useAppSelector((state) => state.characters.currentCharacter)
    const isLoading: boolean = useAppSelector((state) => state.characters.isLoading)
    const error: string = useAppSelector((state) => state.characters.error)

    useEffect(() => {
        dispatch(fetchCharacterById(Number(id)))
    }, [dispatch])

    const {
        name,
        gender,
        species,
        image,
        location,
        firstEpisode,
        status,
        origin,
    } = character

    if(isLoading){
        return <div className='char-wrapper'>
        <Loader />
      </div>
      }
    
      if(error){
        return <div className='char-wrapper'>
        <ErrorComponent {...{errorMessage: error}} />
      </div>
      }

    return <div className='char-wrapper'>
        <div className='char-img-wrapper'>
            <img className='char-img' src={image} alt='charImg'  />
        </div>
        <div className='char-info-block'>
            <div>
                <h2>{name}</h2>
                <span>{species} - {gender}</span>
            </div>
            <div>
                <span><span className='info-highlight'>Status:</span> {status}</span>
            </div>
            <div>
                <span><span className='info-highlight'>Origin:</span> {origin.name}</span>
                <span><span className='info-highlight'>Last known location:</span> {location.name}</span>
                <span><span className='info-highlight'>First appearance</span> In episode {firstEpisode.episode} - {firstEpisode.name}</span>
            </div>
        </div>
    </div>
}