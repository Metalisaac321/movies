import { Checkbox, FormControlLabel, Grid, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { ButtonContainer, StyledButton } from '../Movies/style';
import useAddNewTurn from './hooks/useAddNewTurn';
import TurnsTable from './TurnsTable';

export default () => {

    let { path } = useRouteMatch();

    return (
        <Grid container>
            <Switch>
                <Route exact path={path}>
                    <TurnsTable />
                </Route>
                <Route exact path={`${path}/:turnId`}>
                    <AddNewTurn />
                </Route>
                <Route exact path={`${path}/movie/:movieId`}>
                    <TurnsTable />
                </Route>
                <Route exac path={`${path}/add-new-turn`}>
                    <AddNewTurn />
                </Route>
            </Switch>
        </Grid>
    )
}

const AddNewTurn = () => {
    const {
        turn,
        handleChangeTurnData,
        handleSave
    } = useAddNewTurn()

    return (
        <Grid container direction="column" spacing={4} >
            <Grid container item direction="column" spacing={4}>
                <Grid item>
                    <Typography variant="h3">
                        Turnos
                    </Typography>
                </Grid>
                <Grid container item direction="row">
                    <Grid item style={{ marginRight: '30px' }}>
                        <Typography> Turno </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="time"
                            type="time"
                            defaultValue="07:30"
                            onChange={(e) => handleChangeTurnData('turn', e.target.value)}
                            value={turn.turn}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <FormControlLabel
                        control={<Checkbox
                            checked={turn.state}
                            onChange={(e) => handleChangeTurnData('state', e.target.checked)}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />}
                        label="Activo?"
                    />
                </Grid>
                <Grid item>
                    <ButtonContainer item>
                        <StyledButton variant="contained" color="primary" onClick={handleSave}>
                            <Typography variant="body1">
                                Guardar
                            </Typography>
                        </StyledButton>
                    </ButtonContainer>
                </Grid>
            </Grid>
        </Grid>
    )
}