import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Sidebar from './Sidebar';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch } from 'react-router-dom';
import Movies from '../../domain/Movies';
import Turns from '../../domain/Turns';
import Admin from '../../domain/Admin';
import Profile from '../../domain/Profile';
import Dashboard from '../../domain/Dashboard';


export default function App() {
  return (
    <Fragment>
      <Topbar />
      <Grid container direction="row" spacing={4}>
        <Sidebar />
        <ContainerApp />
      </Grid>
    </Fragment>
  );
}

const ContainerApp = () => {
  return (
    <Grid item xs={12} sm={8}>
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/turns">
          <Turns />
        </Route>
        <Route path="/admins">
          <Admin />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Grid>
  )
};

const Topbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          News
              </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
