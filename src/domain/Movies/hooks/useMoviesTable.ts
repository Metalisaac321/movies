import { useEffect } from "react"
import { MOVIES } from "../constants";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store'
import { setInitMovies } from '../actionCreators'

export default () => {
    const movies = useSelector((state: RootState) => state.moviesState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitMovies(MOVIES))
    }, [dispatch])

    return movies;
}