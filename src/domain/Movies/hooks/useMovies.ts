import { useDispatch } from "react-redux"
import { setDialogProps } from '../actionCreators';

export default () => {
    const dispatch = useDispatch();

    const handleNewMovie = () => {
        dispatch(setDialogProps({
            isEditMovie: false,
            isOpen: true,
            movie: {
                name: '',
                publicationDate: new Date(),
                state: true,
            }
        }))
    }

    return {
        handleNewMovie,
    }
}