import 'date-fns';
import { Button, Dialog, DialogActions, DialogTitle, FormControl, Grid, IconButton, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useMoviesDialog from '../hooks/useMoviesDialog';
import CloseIcon from '@material-ui/icons/Close'
import { StyledDialogContent } from './style';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default () => {
    const {
        isOpen, handleClose, isEditMovie, movie, handleChangeMovieData, handleSave
    } = useMoviesDialog();

    return (
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
            <DialogTitle id="customized-dialog-title">
                <Grid container direction="row" justify="space-between">
                    <Grid>
                        <Typography variant="h4">
                            {isEditMovie ? 'Editar Película' : 'Nueva Película'}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton color="inherit" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </DialogTitle>
            <StyledDialogContent>
                <Grid container direction="column" spacing={4}>
                    <Grid item container direction="row" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">
                                Nombre de la Película
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField
                                value={movie.name}
                                fullWidth
                                variant="outlined"
                                onChange={(e) => handleChangeMovieData('name', e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">
                                Fecha de Publicación
                            </Typography>
                        </Grid>
                        <Grid item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="dd/MM/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={movie.publicationDate}
                                    onChange={(date) => handleChangeMovieData('publicationDate', date)}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </Grid>
                    </Grid>

                    <Grid item container direction="row" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">
                                Estado
                            </Typography>
                        </Grid>
                        <Grid>
                            <FormControl variant="outlined">
                                <Select
                                    value={movie.state + ''}
                                    onChange={(e) => handleChangeMovieData('state', e.target.value)}
                                >
                                    <MenuItem value={'true'}>Activo</MenuItem>
                                    <MenuItem value={'false'}>Inactivo</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </StyledDialogContent>
            <DialogActions>
                <Button variant="contained" autoFocus onClick={handleSave} color="primary">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog >
    )
}
