import InputTasks from '../InputTask'
import { Container } from './styles'

export default function HeaderTasks() {
    return (
        <Container>
            <h1>Minhas Tasks</h1>
            <InputTasks/>
        </Container>
    )
}