import React, { Fragment } from 'react';
import { Grid, ListItem, ListItemText } from '@material-ui/core';
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../../domain/Movies';
import Turns from '../../domain/Turns';
import Admin from '../../domain/Admin';
import Profile from '../../domain/Profile';
import Dashboard from '../../domain/Dashboard';
import { ContainerAppGrid, SidebarAndContainerAppContainer, StyledAppBar, StyledDivider, StyledList } from './style';
import { MENU_ITEMS } from './constants';
import { MenuItemProps } from './types';

export default function App() {
  return (
    <Grid container direction="row">
      <Topbar />
      <SidebarAndContainerAppContainer container item direction="row" spacing={4}>
        <Sidebar />
        <ContainerApp />
      </SidebarAndContainerAppContainer>
    </Grid >
  );
}

const Topbar = () => {
  return (
    <Grid container item>
      <StyledAppBar position="relative">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </StyledAppBar>
    </Grid>
  )
}

const Sidebar = () => {
  return (
    <Grid item xs={12} sm={4}>
      <StyledList>
        {
          MENU_ITEMS.map(({ menuItemId, ...menuItem }) => (
            <MenuItem key={menuItemId} {...menuItem} />
          ))
        }
      </StyledList>
    </Grid>
  )
}

const MenuItem = ({ text, route }: MenuItemProps) => {
  let history = useHistory();

  const handleClickListItem = () => {
    history.push(route);
  }

  return (
    <Fragment>
      <ListItem button onClick={handleClickListItem}>
        <ListItemText primary={text} />
      </ListItem>
      <StyledDivider />
    </Fragment>
  )
}

const ContainerApp = () => {
  return (
    <ContainerAppGrid item xs={12} sm={8}>
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
    </ContainerAppGrid>
  )
};

