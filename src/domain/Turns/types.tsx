import { Movie } from "../Movies/types";

export interface Turn {
    /** id of Turn */
    turnId: number;

    /** Turn hour */
    turn: string;

    /** state of movie (active or inactive) */
    state: boolean;

    movie: Movie;
}


export interface AddTurnDto {
    /** Turn hour */
    turn: string;

    /** state of movie (active or inactive) */
    state: boolean;

    /** ForeingKey with movie */
    movieId: number;
}

export interface TurnsTableBodyProps {
    turns: Turn[];
}

export interface TurnsState {
    turns: Turn[];
    turn: Turn;
}
