import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store'
import { addNewMovie, editMovieField, setDialogProps } from '../actionCreators';

export default () => {
    const dialogProps = useSelector((state: RootState) => state.moviesState.dialogProps);
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setDialogProps({
            movie: {
                name: '',
                publicationDate: new Date(),
                state: true,
            },
            isOpen: false,
        }))
    }

    const handleChangeMovieData = (key: string, value: any) => {
        dispatch(editMovieField(key, value));
    }

    const handleSave = () => {
        if (dialogProps.isEditMovie) {

        } else {
            const newMovie = { ...dialogProps.movie };
            dispatch(addNewMovie(newMovie))
            dispatch(setDialogProps({
                movie: {
                    name: '',
                    publicationDate: new Date(),
                    state: true,
                },
                isOpen: false,
            }))
        }

    }

    return {
        ...dialogProps,
        handleClose,
        handleChangeMovieData,
        handleSave
    };
}