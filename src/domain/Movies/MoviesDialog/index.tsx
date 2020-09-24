import 'date-fns';
import { Button, Dialog, DialogActions, DialogTitle, FormControl, Grid, IconButton, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import useMoviesDialog from '../hooks/useMoviesDialog';
import CloseIcon from '@material-ui/icons/Close'
import { StyledDialogContent, StyledInputContainer } from './style';
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
                    <Grid item style={{
                        width: '500px',
                        textAlign: 'center'
                    }}>
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
                        <StyledInputContainer item>
                            <TextField
                                value={movie.name}
                                fullWidth
                                variant="outlined"
                                onChange={(e) => handleChangeMovieData('name', e.target.value)}
                            />
                        </StyledInputContainer>
                    </Grid>
                    <Grid item container direction="row" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">
                                Fecha de Publicación
                            </Typography>
                        </Grid>
                        <StyledInputContainer item>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    fullWidth
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
                        </StyledInputContainer>
                    </Grid>

                    <Grid item container direction="row" spacing={4}>
                        <Grid item>
                            <Typography variant="body1">
                                Estado
                            </Typography>
                        </Grid>
                        <StyledInputContainer>
                            <FormControl variant="outlined">
                                <Select
                                    value={movie.state + ''}
                                    onChange={(e) => handleChangeMovieData('state', e.target.value)}
                                >
                                    <MenuItem value={'true'}>Activo</MenuItem>
                                    <MenuItem value={'false'}>Inactivo</MenuItem>
                                </Select>
                            </FormControl>
                        </StyledInputContainer>
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
