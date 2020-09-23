import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Route, useParams, Switch, useRouteMatch } from 'react-router-dom';
import TurnsTable from './TurnsTable';

export default () => {
    const {
        movieId,
    } = useParams<{ movieId: string }>();
    let { path } = useRouteMatch();

    return (
        <Grid container>
            <Switch>
                <Route exact path={path}>
                    <TurnsTable />
                </Route>
                <Route exact path={`${path}/:turnId`}>
                    <h1>
                        Turns by id
                    </h1>
                </Route>
                <Route exact path={`${path}/movie/:movieId`}>
                    <h1>
                        Turns by MovieId
                    </h1>
                </Route>
                <Route exac path={`${path}/add-new-turn`}>
                    <AddNewTurn />
                </Route>
            </Switch>
        </Grid>
    )
}


const AddNewTurn = () => {
    return (
        <Grid container direction="column" spacing={4} >
            <Grid container item direction="row" justify="space-between">
                <Grid item>
                    <Typography variant="h3">
                        Turnos
                    </Typography>
                </Grid>
                <Grid container item>
                    <h1>Turn form</h1>
                </Grid>
            </Grid>
        </Grid>
    )

}