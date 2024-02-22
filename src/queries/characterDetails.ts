import { gql } from '@apollo/client';

export const CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    person(id: $id) {
      name
      height
      mass
      birthYear
      hairColor
      eyeColor
      homeworld {
        id
        name
        orbitalPeriod
      }
      filmConnection {
        films {
          id
          title
          releaseDate
        }
      }
    }
  }
`;
