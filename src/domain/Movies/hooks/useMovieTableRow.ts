import { useDispatch } from "react-redux";
import { deleteMovie } from '../actionCreators';

export default () => {
    const dispatch = useDispatch();

    const handleOnDeleteMovie = (movieId: number) => () => {
        dispatch(deleteMovie(movieId))
    }

    return {
        handleOnDeleteMovie,
    }
}