import './App.css'
import React from 'react';
import CharacterList from './Components/CharacterList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Star Wars Characters</h1>
      <CharacterList />
    </div>
  );
};

export default App;
