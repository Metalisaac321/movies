import React from 'react';
import { Grid } from '@material-ui/core';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import ContainerApp from './ContainerApp';

function App() {
  return (
    <>
      <Topbar />
      <Grid container direction="row">
        <Sidebar />
        <ContainerApp />
      </Grid>
    </>
  );
}

export default App;
