import React, { createContext, useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CHARACTER_LIST } from '../queries/characterList';
import { CharactersData, CharacterListItem } from '../types';

interface AppDataContextType {
  characters: CharacterListItem[] | null;
  setCharacters: React.Dispatch<React.SetStateAction<CharacterListItem[] | null>>;
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

  const { loading, error, data } = useQuery<CharactersData>(CHARACTER_LIST);

  useEffect(() => {
    if (!loading && !error && data) {
      setCharacters(data.allPeople.people);
    }
  }, [loading, error, data]);

  return (
    <AppDataContext.Provider value={{ characters, setCharacters }}>
      {children}
    </AppDataContext.Provider>
  );
};
