import { Grid, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import React from 'react';
import { ButtonContainer, StyledButton } from './style';
import CreateIcon from '@material-ui/icons/Create'
import DehazeIcon from '@material-ui/icons/Dehaze'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import DeleteIcon from '@material-ui/icons/Delete'
import { Movie, MoviesTableBodyProps } from './types';
import useMoviesTable from './hooks/useMoviesTable';
import useMovieTableRow from './hooks/useMovieTableRow';
import useMovies from './hooks/useMovies';
import MoviesDialog from './MoviesDialog';


export default () => {
    const { handleNewMovie } = useMovies();
    return (
        <Grid container direction="column" spacing={4} >
            <Grid container item direction="row" justify="space-between">
                <Grid item>
                    <Typography variant="h3">
                        Películas
                    </Typography>
                </Grid>
                <ButtonContainer item>
                    <StyledButton variant="contained" color="primary" onClick={handleNewMovie}>
                        <Typography variant="body1">
                            Nueva película
                        </Typography>
                    </StyledButton>
                </ButtonContainer>
            </Grid>
            <MoviesTable />
            <MoviesDialog />
        </Grid>
    )
}

const MoviesTable = () => {
    const moviesTableProps = useMoviesTable();

    return (
        <Grid item>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>F.Publicación</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <MoviesTableBody {...moviesTableProps} />
                </Table>
            </TableContainer>
        </Grid>
    )
}

const MoviesTableBody = ({ movies }: MoviesTableBodyProps) => (
    <TableBody>
        {
            movies.map((movie) => (
                <MovieTableRow key={movie.movieId} {...movie} />
            ))
        }
    </TableBody>
)

const MovieTableRow = (movie: Movie) => {
    const { movieId, name, publicationDate, state } = movie;
    const {
        handleEditMovie,
        handleOnDeleteMovie,
        handleChangeStatus,
        handleAssingTurns,
    } = useMovieTableRow();

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {movieId}
            </TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{publicationDate.toISOString()}</TableCell>
            <TableCell>{state ? 'Activo' : 'Inactivo'}</TableCell>
            <TableCell>
                <Grid container direction="row" spacing={1}>
                    <IconButton color="primary" onClick={handleEditMovie(movie)}>
                        <CreateIcon />
                    </IconButton>
                    <IconButton color="inherit" onClick={handleAssingTurns(movieId)}>
                        <DehazeIcon />
                    </IconButton>
                    <IconButton color="default" onClick={handleChangeStatus(movie, !state)}>
                        {state ? <LockIcon /> : <LockOpenIcon />}
                    </IconButton>
                    <IconButton color="secondary" onClick={handleOnDeleteMovie(movieId)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </TableCell>
        </TableRow>
    )
}
