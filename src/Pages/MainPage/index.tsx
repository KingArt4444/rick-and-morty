import React, { useEffect } from 'react';
import './Main.scss'
import CharacterCard from '../../components/CharacterCard';
import Input from '../../components/Input';
import { useAppDispatch, useAppSelector } from '../../feature/hooks';
import { fetchCharacters } from '../../feature/slices/characterSlice';
import { fetchEpisodes } from '../../feature/slices/episodeSlice';
import { Episode, CharacterModel } from '../../feature/models';

export default function MainPage() {

  const characters: CharacterModel[] = useAppSelector((state) => state.characters.results)
  const episodes: Episode[] = useAppSelector((state) => state.episodes.results)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters())
    dispatch(fetchEpisodes())
  }, [dispatch])

  return <div className='wrapper'>
    <Input />
    <div className='card-field-wrapper'>
      {characters.map((char:CharacterModel) => <CharacterCard key={char.id} {...{character:char}} />)}
    </div>
  </div>
}