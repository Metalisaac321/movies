import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeTurnById, deleteTurn, setTurnState } from "../actionCreators";
import { Turn } from "../types";


export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnDeleteTurn = (turnId: number) => () => {
        dispatch(deleteTurn(turnId))
    }

    const handleChangeStatus = (turn: Turn, value: boolean) => () => {
        dispatch(setTurnState(
            {
                turnId: 0,
                state: false,
                turn: '12:00',
                movie: {
                    movieId: 0,
                    name: '',
                    publicationDate: new Date(),
                    state: false,
                }
            }
        ))
        dispatch(setTurnState({
            ...turn,
            state: value,
        }))
        dispatch(changeTurnById(turn.turnId));
    }

    const handleEditTurn = (turn: Turn) => () => {
        dispatch(setTurnState({ ...turn }))
        history.push(`/turns/${turn.movie.movieId}`)
    }

    return {
        handleOnDeleteTurn,
        handleEditTurn,
        handleChangeStatus,
    }
}