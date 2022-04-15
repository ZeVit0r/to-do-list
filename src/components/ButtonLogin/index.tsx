import { ButtonContainer, Img, LinkSx } from './styles'

import Logo_github_white from "../../assets/logo-github-white.svg"
import { useContext } from 'react'

import { AuthContext } from '../../context/auth'


export default function ButtonLogin() {
    const { signInUrl } = useContext(AuthContext)

    return (
        <ButtonContainer sx={LinkSx} href={signInUrl}>
            <img src={Logo_github_white} style={Img} alt="logo do github" />
            Login with Github!
        </ButtonContainer>
    )
}