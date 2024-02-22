import React from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_LIST } from '../queries/characterList';
import { CharactersData } from '../types';
import usePagination from '../hooks/usePagination';

const PAGE_SIZE = 10;

const CharacterList: React.FC = () => {
  const { page, cursor, nextPage, prevPage } = usePagination();

  const { loading, error, data } = useQuery<CharactersData>(CHARACTER_LIST, {
    variables: { first: PAGE_SIZE, after: cursor },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Data not available.</p>;

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {data.allPeople.people.map((character) => (
          <li key={character.id}>{character.name} - Homeworld: {character.homeworld.name}</li>
        ))}
      </ul>
      <button onClick={() => prevPage()} disabled={page === 1}>Previous</button>
      <button onClick={() => nextPage(data.allPeople.pageInfo.hasNextPage, data.allPeople.pageInfo.endCursor)} disabled={!data.allPeople.pageInfo.hasNextPage}>Next</button>
    </div>
  );
};

export default CharacterList;
