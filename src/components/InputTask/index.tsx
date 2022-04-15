import { Button, Input } from '@mui/material'
import { ButtonAdd, Container, InputNameTask } from './styles'

import AddIcon from '../../assets/add-icon.svg'
import { useContext, useState } from 'react'
import { api } from '../../services/api'
import { TaskContext } from '../../context/task'

export default function InputTasks() {
    const { updateTasks } = useContext(TaskContext)
    const [titleTask, setTitleTask] = useState('')
    
    const handleNewTask = async (title: string) => {
        const token = localStorage.getItem('@todo:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            await api.post('task',{
                task: title
            }).then(response => { console.log(response.data) })
        }

        updateTasks()

        setTitleTask('')
    }

    return (
        <Container>
            <Input sx={InputNameTask} placeholder="Task name" value={titleTask} onChange={e=>setTitleTask(e.target.value)}/>
            <Button sx={ButtonAdd} onClick={()=>handleNewTask(titleTask)}>
                <img src={AddIcon} alt="botão para adicionar nova tarefa" />
            </Button>
        </Container>
    )
}