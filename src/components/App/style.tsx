import { styled } from '@material-ui/core/styles';
import { AppBar, Divider, Grid, List } from '@material-ui/core';

export const StyledList = styled(List)({
    borderRight: '2px solid black',
    height: '100%'
});

export const StyledDivider = styled(Divider)({
    height: '3px',
    backgroundColor: 'black'
});

export const SidebarAndContainerAppContainer = styled(Grid)({
    marginRight: '10%'
})

export const ContainerAppGrid = styled(Grid)({
    marginTop: '20px'
})

export const StyledAppBar = styled(AppBar)({
    boxShadow: 'none',
    borderBottom: '2px solid black',
})

export const SidebarContainer = styled(Grid)({
    height: '935px'
})