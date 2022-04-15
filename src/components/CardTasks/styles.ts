import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    background: `${Colors.white}`, 

    minHeight: '500px', 
    width: '80vw',
    marginTop: '50px',

    zIndex: 1,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    borderRadius: '5px',
    boxShadow: '0px 2px 5px #999999'

});

export const Line = styled(Box)({
    width: '100%',
    height: '1px',
    background: `${Colors.blue_200}`
})