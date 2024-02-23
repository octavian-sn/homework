import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_LIST } from '../queries/characterList';
import { CharactersData, CharacterListItem } from '../types';

interface AppDataContextType {
  characters: CharacterListItem[] | null;
  setCharacters: React.Dispatch<React.SetStateAction<CharacterListItem[] | null>>;
  //Loading state
  loading: boolean;
}

const AppDataContext = createContext<AppDataContextType | null>(null);

export const useAppDataContext = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppDataContext must be used within an AppDataContextProvider');
  }
  return context;
};

export const AppDataContextProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [characters, setCharacters] = useState<CharacterListItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // Initialize loading state

  const { loading: queryLoading, error, data } = useQuery<CharactersData>(CHARACTER_LIST);

  useEffect(() => {
    if (queryLoading) {
      setLoading(true); // Set loading to true when query is loading
    } else if (!queryLoading && !error && data) {
      setCharacters(data.allPeople.people);
      setLoading(false); // Set loading to false when query is completed
    }
  }, [queryLoading, error, data]);

  return (
    <AppDataContext.Provider value={{ characters, setCharacters, loading }}>
      {children}
    </AppDataContext.Provider>
  );
};
