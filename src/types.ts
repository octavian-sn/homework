export interface CharactersData {
    allPeople: {
        pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
        };
        people: CharacterListItem[];
    };
}

export interface CharacterListItem {
    id: string;
    name: string;
    homeworld: Homeworld;
}

export interface Homeworld {
    id: string;
    name: string;
    orbitalPeriod: number;
}

export interface CharacterDetails extends CharacterListItem {
    height: number;
    mass: number;
    birthYear: string;
    hairColor: string;
    eyeColor: string;
    films: Film[];
}

export interface Film {
    id: string;
    title: string;
    releaseDate: string;
}
