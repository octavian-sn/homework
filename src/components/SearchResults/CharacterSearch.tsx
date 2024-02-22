import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_LIST } from '../../queries/characterPage';
import { CharactersData, CharacterListItem } from '../../types';

const CharacterFetcher: React.FC<{ children: (characters: CharacterListItem[]) => React.ReactNode }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { loading, error, data } = useQuery<CharactersData>(CHARACTER_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.allPeople) return <p>Data not available.</p>;

  const filteredCharacters = data.allPeople.people.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.homeworld.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search characters..." />
      {children(filteredCharacters)}
    </>
  );
};

export default CharacterFetcher;
