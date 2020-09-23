import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteTurn } from "../actionCreators";
import { Turn } from "../types";


export default () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleOnDeleteTurn = (turnId: number) => () => {
        dispatch(deleteTurn(turnId))
    }

    const handleChangeStatus = (turn: Turn, value: boolean) => () => {
        console.log('HandleChangeStatus: ');
        /* dispatch(setDialogProps({
            isOpen: false,
            isEditTurn: true,
            turn: { ...turn, state: value },
        }))
        dispatch(changeTurnById(turn.turnId)); */
    }

    const handleEditTurn = (turn: Turn) => () => {
        console.log('handleEditTurn: ', turn)
        /* dispatch(setDialogProps({
            isOpen: true,
            isEditTurn: true,
            turn: { ...turn },
        })) */
    }

    const handleAssingTurns = (movieId: number) => () => {
        history.push(`turns/movie/${movieId}`)
    }

    return {
        handleOnDeleteTurn,
        handleEditTurn,
        handleChangeStatus,
        handleAssingTurns,
    }
}