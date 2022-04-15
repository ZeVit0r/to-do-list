import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    backgroundColor: `${Colors.white}`, 
    height: '350px', 
    width: '350px',
    borderRadius: '5px',
    boxShadow: '0px 2px 5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '10px'
});