import { Container, AvatarImg, Infos, InfosText, Quit } from './styles'

import QuitIcon from '../../assets/quit.svg'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth'

export default function CardUser() {
    const { user, signOut } = useContext(AuthContext)

    return (
        <Container>

            <Infos>
                    <img style={AvatarImg} src={user?.avatar_url} alt="imagem do usuario" />
                <InfosText>
                    <p>{user?.name}</p>
                    <p>{user?.login}</p>
                </InfosText>
            </Infos>

            <img style={Quit} src={QuitIcon} alt="sair" onClick={signOut} />


        </Container>
    )
}