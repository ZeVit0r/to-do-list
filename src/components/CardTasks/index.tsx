import HeaderTasks from '../HeaderTasks'
import ListTasks from '../ListTasks'
import { Container, Line } from './styles'


export default function CardTasks() {
    return (
        <Container>
            <HeaderTasks/>

            <Line/>

            <ListTasks/>
        </Container>
    )
}