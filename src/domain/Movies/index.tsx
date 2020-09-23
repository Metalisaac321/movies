import { Grid, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import React from 'react';
import { ButtonContainer, StyledButton } from './style';
import CreateIcon from '@material-ui/icons/Create'
import DehazeIcon from '@material-ui/icons/Dehaze'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import DeleteIcon from '@material-ui/icons/Delete'
import { MOVIES } from './constants';
import { Movie, MoviesTableBodyProps, MoviesTableRowProps } from './types';

export default () => {
    return (
        <Grid container direction="column" spacing={4} >
            <Grid container item direction="row" justify="space-between">
                <Grid item>
                    <Typography variant="h3">
                        Películas
                    </Typography>
                </Grid>
                <ButtonContainer item alignContent="center">
                    <StyledButton variant="contained" color="primary">
                        <Typography variant="body1">
                            Nueva película
                    </Typography>
                    </StyledButton>
                </ButtonContainer>
            </Grid>
            <MoviesTable />
        </Grid>
    )
}

const MoviesTable = () => {
    return (
        <Grid item>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>F.Publicación</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <MoviesTableBody movies={MOVIES} />
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

const MovieTableRow = ({ movieId, name, publicationDate, state }: Movie) => (
    <TableRow>
        <TableCell component="th" scope="row">
            {movieId}
        </TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{publicationDate.toISOString()}</TableCell>
        <TableCell>{state ? 'Activo' : 'Inactivo'}</TableCell>
        <TableCell>
            <Grid container direction="row" spacing={1}>
                <IconButton color="primary">
                    <CreateIcon />
                </IconButton>
                <IconButton color="inherit">
                    <DehazeIcon />
                </IconButton>
                <IconButton color="default">
                    {state ? <LockIcon /> : <LockOpenIcon />}
                </IconButton>
                <IconButton color="secondary">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </TableCell>
    </TableRow>
)
