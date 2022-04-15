import { Container, containerImg } from './styles'

import Logo from "../../assets/logo.svg"
import CardUser from '../CardUser'

export default function Header() {
    return (
        <Container>
            <div style={containerImg}>
                <img src={Logo} alt="logo do site" />
            </div>
            <CardUser/>
        </Container>
    )
}