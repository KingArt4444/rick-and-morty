import React, { useState } from 'react';
import './input.scss';
import searchicon from '../../images/searchicon.png'

interface SearchInputProps {
  handleSearchSubmit: (searchVal: string) => void
}

export default function SearchInput(props: SearchInputProps) {

  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.currentTarget.value)


  const {
    handleSearchSubmit,
  } = props

  return <div className='input-wrapper'>
    <button className='input-button' type='button' onClick={() => handleSearchSubmit(searchTerm)}><img src={searchicon} alt='search' className='search-icon' /></button>
    <input type="text" className='input' placeholder='Search' onChange={handleSearchInputChange} />
  </div>
}