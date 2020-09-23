import { Turn } from "./types";

export const TURNS: Turn[] = [
    {
        turnId: 1,
        turn: '12:00',
        state: false,
        movie: {
            movieId: 1,
            name: 'X men: Días del futuro pasado',
            publicationDate: new Date(),
            state: true,
        },
    },
    {
        turnId: 2,
        turn: '13:00',
        state: false,
        movie: {
            movieId: 1,
            name: 'X men: Días del futuro pasado',
            publicationDate: new Date(),
            state: true,
        },
    },
    {
        turnId: 3,
        turn: '12:00',
        state: false,
        movie: {
            movieId: 2,
            name: 'Alicia en el país de las maravillas',
            publicationDate: new Date(),
            state: false,
        },
    },
    {
        turnId: 4,
        turn: '13:00',
        state: false,
        movie: {
            movieId: 2,
            name: 'Alicia en el país de las maravillas',
            publicationDate: new Date(),
            state: false,
        },
    },
    {
        turnId: 5,
        turn: '12:00',
        state: false,
        movie: {
            movieId: 3,
            name: 'Locos de amor',
            publicationDate: new Date(),
            state: true,
        }
    },
    {
        turnId: 6,
        turn: '13:00',
        state: false,
        movie: {
            movieId: 3,
            name: 'Locos de amor',
            publicationDate: new Date(),
            state: true,
        }
    },

]