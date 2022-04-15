import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    background: `${Colors.white}`, 
    height: '100vh', 
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});
