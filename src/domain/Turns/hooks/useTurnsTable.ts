import { useEffect } from "react"
import { TURNS } from "../constants";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store'
import { setInitTurns } from '../actionCreators'

export default () => {
    const turnsState = useSelector((state: RootState) => state.turnsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitTurns(TURNS))
    }, [dispatch])

    return {
        turns: turnsState.turns
    }
}