import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store'
import { addNewMovie, changeMovieById, editMovieField, setDialogProps } from '../actionCreators';

export default () => {
    const dialogProps = useSelector((state: RootState) => state.moviesState.dialogProps);
    const dispatch = useDispatch()

    const handleClose = () => {
        cleanUpAndCloseDialog();
    }

    const cleanUpAndCloseDialog = () => {
        dispatch(setDialogProps({
            ...dialogProps,
            movie: {
                movieId: 0,
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
            dispatch(changeMovieById(dialogProps.movie.movieId));
        } else {
            const newMovie = { ...dialogProps.movie };
            dispatch(addNewMovie(newMovie))
        }
        cleanUpAndCloseDialog();
    }

    return {
        ...dialogProps,
        handleClose,
        handleChangeMovieData,
        handleSave
    };
}