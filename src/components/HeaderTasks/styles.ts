import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({ 

    width: '100%',
    padding: '40px 50px',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    color:`${Colors.blue_400}`,

    flexWrap: 'wrap'
});
