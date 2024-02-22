import { gql } from '@apollo/client';

export const CHARACTER_LIST = gql`
query GetCharacterList {
    allPeople {
        people {
          id
          name
          homeworld {
            id
            name
          }
        }
    }
}
`;
