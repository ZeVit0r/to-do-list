import { Button, List } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import TrashIcon from '../../assets/trash.svg'
import { AuthContext } from '../../context/auth'
import { TaskContext } from '../../context/task'
import { api } from '../../services/api'
import { UL, LI, Container, ContainerItem, CheckboxItem, IconTrash } from './styles'

type Task = {
    id: string;
    title: string;
    completed: boolean;
}

export default function ListTasks() {
   const { tasks, handleTask, handleDeleteTask } = useContext(TaskContext)



    return (
        <Container>
            <List sx={UL}>
                {tasks.map((task) =>{
                    return(
                        <LI key={task.id}>
                            <ContainerItem>
                                <input
                                    style={CheckboxItem}
                                    type="checkbox" 
                                    checked={task.completed}
                                    onChange={() => handleTask(task.id)}
                                />
                                {
                                    task.completed 
                                    ? 
                                    <p style={{color: '#c4c4c4'}}>{task.title}</p> 
                                    : 
                                    <p>{task.title}</p>
                                }
                            </ContainerItem>
                            <Button onClick={()=>handleDeleteTask(task.id)}>
                                <img style={IconTrash} src={TrashIcon} alt="apaga a task" />
                            </Button>
                        </LI>
                    )
                })}
            </List>
        </Container>
    )
}