import { Divider, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';

export default () => {
    return (
        <Grid item xs={12} sm={4}>
            <List component="nav">
                <ListItem button>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary="Películas" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Turnos" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Administradores" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Perfil" />
                </ListItem>
                <Divider light />
                <ListItem button>
                    <ListItemText primary="Cerrar sesión" />
                </ListItem>
            </List>
        </Grid>
    )
}