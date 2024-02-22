import React from 'react';
import CharacterList from '../components/CharacterList/CharacterList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Star Wars Characters App!</h1>

      <CharacterList />
    </div>
  );
};

export default Home;
