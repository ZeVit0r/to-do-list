import { styled } from '@material-ui/styles';
import { Box, Button } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({ 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const InputNameTask = {
    color: `${Colors.blue_700}`,
    fontWeight: '400',
    paddingLeft: '10px',

    marginRight: '10px',
    marginTop: '10px',

    alignItems: 'center',

    borderBottom: `1px solid ${Colors.blue_200}`,

    '&:hover':{
        borderBottom: `1px solid ${Colors.blue_200}`,
    },

    '&::before':{
        borderBottom: `1px solid ${Colors.blue_200}`,
        content: 'none'

    },

    '&::after':{
        borderBottom: `2px solid ${Colors.blue_400}`,

    }
}

export const ButtonAdd = {
    padding: '0',
    margin: '0',

    minWidth: '0px',
    minHeight: '0px',

    Width: '35px',
    Height: '35px',
    borderRadius: '50px',

    transition: '0.4s',
    '&:hover':{
        opacity: '0.8'
    }
}