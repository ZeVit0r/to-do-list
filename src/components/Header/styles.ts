import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    background: `${Colors.blue_400}`, 

    height: '210px', 
    width: '100vw',

    padding:'5px 10vw',

    position: 'fixed',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
});

export const containerImg = {
    height: '80px',
    marginRight: '5px',

    display: 'flex',
    alignItems: 'center',
}