import { useContext, useEffect } from "react";
import CardTasks from "../../components/CardTasks";
import Header from "../../components/Header";
import { TaskContext } from "../../context/task";
import { Container } from "./styles";

export function ScreenTasks() {
    const { updateTasks } = useContext(TaskContext)

    useEffect(() => {updateTasks();},[])

    return(
        <>
            <Header/>
            <Container>
                <CardTasks/>
            </Container>
        </>
    )
}