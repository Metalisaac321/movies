import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { addNewTurn, changeTurnById, editTurnField, setInitTurns, setTurnState } from "../actionCreators";
import { TURNS } from "../constants";

export default () => {
    const turn = useSelector((state: RootState) => state.turnsState.turn);
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        movieId,
    } = useParams<{ movieId: string }>();

    const handleChangeTurnData = (key: string, value: any) => {
        dispatch(editTurnField(key, value));
    }

    const handleSave = () => {
        if (movieId) {
            dispatch(changeTurnById(Number(movieId)));
        } else {
            const newTurn = { ...turn };
            dispatch(addNewTurn(newTurn))
        }
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
        history.goBack()
    }

    return {
        turn,
        handleChangeTurnData,
        handleSave,
    }

}