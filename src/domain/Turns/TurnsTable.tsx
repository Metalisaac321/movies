import { Grid, Table, TableContainer, Typography, TableHead, TableRow, TableCell, TableBody, IconButton } from '@material-ui/core';
import React from 'react';
import { ButtonContainer, StyledButton } from './style';
import CreateIcon from '@material-ui/icons/Create'
import DehazeIcon from '@material-ui/icons/Dehaze'
import LockIcon from '@material-ui/icons/Lock'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import DeleteIcon from '@material-ui/icons/Delete'
import useTurnsTable from './hooks/useTurnsTable';
import useTurnTableRow from './hooks/useTurnTableRow';
import useTurns from './hooks/useTurns';
import { Turn, TurnsTableBodyProps } from './types';

export default (props: {}) => {
    const {
        handleNewTurn,
    } = useTurns();

    return (
        <Grid container direction="column" spacing={4} >
            <Grid container item direction="row" justify="space-between">
                <Grid item>
                    <Typography variant="h3">
                        Turnos
                    </Typography>
                </Grid>
                <ButtonContainer item>
                    <StyledButton variant="contained" color="primary" onClick={handleNewTurn}>
                        <Typography variant="body1">
                            Nuevo Turno
                        </Typography>
                    </StyledButton>
                </ButtonContainer>
            </Grid>
            <TurnsTable />
        </Grid>
    )
}

const TurnsTable = () => {
    const turnsTableProps = useTurnsTable();

    return (
        <Grid item>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell>Turno</TableCell>
                            <TableCell>Estado</TableCell>
                            <TableCell>Movie</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TurnsTableBody {...turnsTableProps} />
                </Table>
            </TableContainer>
        </Grid>
    )
}

const TurnsTableBody = ({ turns }: TurnsTableBodyProps) => (
    <TableBody>
        {
            turns.map((turn) => (
                <TurnTableRow key={turn.turnId} {...turn} />
            ))
        }
    </TableBody>
)

const TurnTableRow = (turnObject: Turn) => {
    const {
        turnId,
        state,
        turn,
        movie
    } = turnObject;

    const {
        handleEditTurn,
        handleOnDeleteTurn,
        handleChangeStatus,
    } = useTurnTableRow();

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {turnId}
            </TableCell>
            <TableCell>{turn}</TableCell>
            <TableCell>{state ? 'Activo' : 'Inactivo'}</TableCell>
            <TableCell>{movie.name}</TableCell>
            <TableCell>
                <Grid container direction="row" spacing={1}>
                    <IconButton color="primary" onClick={handleEditTurn(turnObject)}>
                        <CreateIcon />
                    </IconButton>
                    <IconButton color="default" onClick={handleChangeStatus(turnObject, !state)}>
                        {state ? <LockIcon /> : <LockOpenIcon />}
                    </IconButton>
                    <IconButton color="secondary" onClick={handleOnDeleteTurn(turnId)}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </TableCell>
        </TableRow>
    )
}
