import { styled } from '@material-ui/core/styles';
import { Divider, List } from '@material-ui/core';

export const StyledList = styled(List)({
    borderRight: '2px solid black'
});

export const StyledDivider = styled(Divider)({
    height: '3px',
    backgroundColor: 'black'
});
