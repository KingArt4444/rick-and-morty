import React, { useEffect, useState } from 'react';
import './Main.scss'
import CharacterCard from '../../components/CharacterCard';
import SearchInput from '../../components/SearchInput';
import Loader from '../../components/Loader';
import ErrorComponent from '../../components/ErrorComponent';
import PaginationComponent from '../../components/Pagination';
import { useAppDispatch, useAppSelector } from '../../feature/hooks';
import { fetchCharacters } from '../../feature/slices/characterSlice';
import { fetchEpisodes } from '../../feature/slices/episodeSlice';
import { CharacterModel, PaginationInfo } from '../../feature/models';

export default function MainPage() {
  const [page, setPage] = useState<number>(1);
  const handlePageChange = (newPage: number) => setPage(newPage);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const characters: CharacterModel[] = useAppSelector((state) => state.characters.results)
  const charactersInfo: PaginationInfo = useAppSelector((state) => state.characters.info)
  const isLoading: boolean = useAppSelector((state) => state.characters.isLoading)
  const error: string = useAppSelector((state) => state.characters.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCharacters(page, searchTerm))
    dispatch(fetchEpisodes())
  }, [dispatch, page, searchTerm])

  const handleSearchSubmit = (searchVal: string) => {
    setSearchTerm(searchVal);
    setPage(1);
  }

  if(isLoading){
    return <div className='wrapper'>
    <SearchInput {...{
      handleSearchSubmit
    }} />
    <Loader />
  </div>
  }

  if(error){
    return <div className='wrapper'>
    <SearchInput {...{
      handleSearchSubmit
    }} />
    <ErrorComponent {...{errorMessage: error}} />
  </div>
  }

  return <div className='wrapper'>
    <SearchInput {...{
      handleSearchSubmit
    }} />
    <div className='card-field-wrapper'>
      {characters.map((char: CharacterModel) => <CharacterCard key={char.id} {...{ character: char }} />)}
    </div>
    <PaginationComponent {...{
      page,
      totalPages: charactersInfo.pages,
      handlePageChange
    }} />
  </div>
}