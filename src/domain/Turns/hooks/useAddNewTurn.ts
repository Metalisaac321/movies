import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../../../store";
import { addNewTurn, changeTurnById, editTurnField, setTurnState } from "../actionCreators";

export default () => {
    const turn = useSelector((state: RootState) => state.turnsState.turn);
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        turnId,
    } = useParams<{ turnId: string }>();

    const handleChangeTurnData = (key: string, value: any) => {
        dispatch(editTurnField(key, value));
    }

    const handleSave = () => {
        console.log('movieId: ', turnId);
        if (turnId !== 'add-new-turn') {
            console.log('se va a editar: ')
            dispatch(changeTurnById(Number(turnId)));
        } else {
            const newTurn = { ...turn };
            dispatch(addNewTurn(newTurn))
        }
        history.goBack()
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
    }

    return {
        turn,
        handleChangeTurnData,
        handleSave,
    }

}