import { useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { changeTurnById, deleteTurn, setTurnState } from "../actionCreators";
import { Turn } from "../types";


export default () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let { path } = useRouteMatch();

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
        console.log('handleEditTurn: ', turn)
        history.push(`/turns/${turn.movie.movieId}`)
    }

    return {
        handleOnDeleteTurn,
        handleEditTurn,
        handleChangeStatus,
    }
}