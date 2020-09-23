import { Grid, ListItem, ListItemText } from '@material-ui/core';
import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { MENU_ITEMS } from './constants';
import { StyledList, StyledDivider } from './style';
import { MenuItemProps } from './types';

export default () => {
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