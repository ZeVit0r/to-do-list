import Logo_github_blue from "../../assets/logo-github-blue.svg"


import ButtonLogin from "../ButtonLogin";

import { Container } from "./styles";

export function Login() {

    return(
        <Container>
            <img src={Logo_github_blue} alt="logo do github" />
            <ButtonLogin/>
        </Container>
    )
}