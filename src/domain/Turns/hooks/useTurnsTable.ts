import { useEffect } from "react"
import { TURNS } from "../constants";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store'
import { setInitTurns } from '../actionCreators'
import { useParams } from "react-router-dom";

export default () => {
    const {
        movieId,
    } = useParams<{ movieId: string }>();
    const turnsState = useSelector((state: RootState) => state.turnsState);
    const dispatch = useDispatch();

    let turns = turnsState.turns;

    useEffect(() => {
        const turn = turnsState.turn;
        if (turns.length === 0) {
            dispatch(setInitTurns(TURNS))
        }

    }, [])

    useEffect(() => {
        if (movieId) {
            dispatch(setInitTurns(turns.filter((turn) => turn.movie.movieId.toString() === movieId)))
        }
    }, [movieId])

    return {
        turns,
    }
}