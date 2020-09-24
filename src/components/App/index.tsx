import React, { Fragment } from 'react';
import { Avatar, Grid, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Button, Toolbar } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom';
import Movies from '../../domain/Movies';
import Turns from '../../domain/Turns';
import Admin from '../../domain/Admin';
import Profile from '../../domain/Profile';
import Dashboard from '../../domain/Dashboard';
import { ContainerAppGrid, SidebarAndContainerAppContainer, SidebarContainer, StyledAppBar, StyledDivider, StyledList } from './style';
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
          <Grid item container direction="row" justify="space-between">
            <Grid item container direction="row" xs={8}>
              <Grid item>
                <Avatar variant="square" style={{
                  'height': '50px',
                  'width': '51px',
                }}>
                  Logo
                </Avatar>
              </Grid>
              <Grid item style={{ alignSelf: 'center' }}>
                <Button color="inherit">Evaluación Osp</Button>
              </Grid>
            </Grid>
            <Grid item direction="row" container style={{
              width: '150px',
            }}>
              <Grid item style={{ alignSelf: 'center' }}>
                <Avatar
                  variant="square"
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQGVmjcqYSexJg/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=pbviNFYhROsrmOFtJaICAgPm0ImlBEUpc2JxfMSNnOA"
                />
              </Grid>
              <Grid item style={{ alignSelf: 'center' }}>
                <Typography variant="body1">
                  Admin
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </Grid>
  )
}

const Sidebar = () => {
  return (
    <SidebarContainer item xs={12} sm={4}>
      <StyledList>
        {
          MENU_ITEMS.map(({ menuItemId, ...menuItem }) => (
            <MenuItem key={menuItemId} {...menuItem} />
          ))
        }
      </StyledList>
    </SidebarContainer>
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

