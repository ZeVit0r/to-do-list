import { styled } from '@material-ui/styles';
import { Box, BoxTypeMap, Checkbox, List, ListItem } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    width: '100%',
    height: '350px',
    paddingTop: '10px',
    padding: '0 10px',
    overflowY: 'scroll',
    '&::-webkit-scrollbar':{
        width: '0px'
    }
});

export const UL ={
    padding: '0px'
}

export const LI = styled(ListItem)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px',

    transition: '0.4s',

    '&:hover':{
        background: `${Colors.blue_100}`
    }
});

export const ContainerItem = styled(Box)({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
});

export const CheckboxItem = {
    marginRight: '10px',
    minHeight: '20px',
    minWidth: '20px',
    cursor: 'pointer',
    border: '1px solid',
    borderRadius: '5px',
    background: '#ffffff',

    transition: '0.2s',

    '&:hover':{
        background: `${Colors.green}`
    }
}

export const IconTrash = {
    cursor: 'pointer',
}