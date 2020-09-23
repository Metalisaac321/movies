
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

export interface AddMovieDto {
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

export interface DialogProps {
    isOpen: boolean;
    isEditMovie?: boolean;
    movie: Movie;
}

export interface InitDialogProps {
    isOpen: boolean;
    isEditMovie: boolean;
    movie: AddMovieDto;
}

export interface MoviesState {
    movies: Movie[];
    dialogProps: DialogProps;
}
