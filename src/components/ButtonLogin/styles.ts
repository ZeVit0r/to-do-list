import { styled } from '@material-ui/styles';
import { Link } from '@mui/material';
import Colors from '../../styles/Colors';

export const ButtonContainer = styled(Link)({
        backgroundColor: `${Colors.blue_400}`,
        color: `${Colors.white}`,

        fontWeight: 'bold',

        padding: '8px 20px',
        borderRadius: '5px',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

        cursor: 'pointer',
        textDecoration: 'node',

        transition: '0.2s',
        '&:hover': {
                backgroundColor: `${Colors.blue_400}`,
                opacity: 0.85
        }
});

export const Img = {
        marginRight: '10px'
}

export const LinkSx = {
        textDecoration: "none", 
        color: `${Colors.white}`
}