export interface Movie {
    /** id of movie */
    movieId: number;

    /** name of movie */
    name: string;

    /** publication date of movie */
    publicationDate: Date;

    /** state of movie (active or inactive) */
    state: boolean;
}

export interface MoviesTableBodyProps {
    movies: Movie[];
}

export interface MoviesTableRowProps {

}