export interface CharactersData {
    allPeople: {
        totalCount: number;
        people: Character[];
    };
}

export interface Character {
    id: string;
    name: string;
    height: number;
    mass: number;
    birthYear: string;
    hairColor: string;
    eyeColor: string;
    homeworld: Homeworld;
    filmConnection: {
        films: Film[];
    };
}

export interface Homeworld {
    id: string;
    name: string;
    orbitalPeriod: number;
}

export interface Film {
    id: string;
    title: string;
    releaseDate: string;
}
