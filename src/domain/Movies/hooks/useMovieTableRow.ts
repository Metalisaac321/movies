import { useDispatch } from "react-redux";
import { changeMovieById, deleteMovie, setDialogProps } from '../actionCreators';
import { Movie } from "../types";

export default () => {
    const dispatch = useDispatch();

    const handleOnDeleteMovie = (movieId: number) => () => {
        dispatch(deleteMovie(movieId))
    }

    const handleChangeStatus = (movie: Movie, value: boolean) => () => {
        dispatch(setDialogProps({
            isOpen: false,
            isEditMovie: true,
            movie: { ...movie, state: value },
        }))
        dispatch(changeMovieById(movie.movieId));
    }

    const handleEditMovie = (movie: Movie) => () => {
        dispatch(setDialogProps({
            isOpen: true,
            isEditMovie: true,
            movie: { ...movie },
        }))
    }

    return {
        handleOnDeleteMovie,
        handleEditMovie,
        handleChangeStatus
    }
}