import { Grid, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import React from 'react';
import { ButtonContainer, StyledButton } from './style';
import CreateIcon from '@material-ui/icons/Create'
import DehazeIcon from '@material-ui/icons/Dehaze'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import DeleteIcon from '@material-ui/icons/Delete'

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
            <TableOfMovies />
        </Grid>
    )
}

const TableOfMovies = () => {
    return (
        <Grid item>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">Nombre</TableCell>
                            <TableCell align="right">F.Publicación</TableCell>
                            <TableCell align="right">Estado</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">
                                {'row.name'}
                            </TableCell>
                            <TableCell align="right">{'row.calories'}</TableCell>
                            <TableCell align="right">{'row.fat'}</TableCell>
                            <TableCell align="right">{'row.carbs'}</TableCell>
                            <MovieOperations />
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

const MovieOperations = () => {
    return (
        <TableCell align="right">
            <Grid direction="row" spacing={1}>
                <IconButton color="primary">
                    <CreateIcon />
                </IconButton>
                <IconButton color="inherit">
                    <DehazeIcon />
                </IconButton>
                <IconButton>
                    <LockIcon />
                </IconButton>
                <IconButton color="secondary">
                    <DeleteIcon />
                </IconButton>
            </Grid>
        </TableCell>
    )
}