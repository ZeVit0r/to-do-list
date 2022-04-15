import { styled } from '@material-ui/styles';
import { Box } from '@mui/material';
import Colors from '../../styles/Colors';

export const Container = styled(Box)({
    background: `${Colors.blue_700}`, 

    height: '70px', 
    width: '290px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: '5px 10px',

    borderRadius: '5px',
    boxShadow: '0px 2px 5px'

});

export const AvatarImg = {
    width: '56px',
    height: '56px',
    borderRadius: '5px',
    border: '1px solid #FFFFFF',
    marginRight: '5px'
}

export const Infos = styled(Box)({
    display: 'flex',
    margin: '2px'
})

export const InfosText= styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    color: `${Colors.white}`
})

export const Quit = {
    cursor: 'pointer'
}