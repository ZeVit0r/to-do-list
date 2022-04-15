import { Login } from "../../components/Login";

import { Container } from "./styles";

import Logo from "../../assets/logo.svg"

export function ScreenLogin() {
    return(
        <Container>
            <img src={Logo} alt="logo do site" />
            <Login/>
        </Container>
    )
}