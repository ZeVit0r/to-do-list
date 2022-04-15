import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";

type Task = {
    id: string;
    title: string;
    completed: boolean;
}

type TaskContextData = {
    tasks: Task[];
    handleTask: any;
    handleDeleteTask: any;
    updateTasks: () => void;
}

type TaskProvider = {
    children: ReactNode;
}

export const TaskContext = createContext({} as TaskContextData)

export function TaskProvider(props: TaskProvider){
    const [ tasks, setTasks ] = useState<Task[]>([])

    useEffect(() => {
        const token = localStorage.getItem('@todo:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<Task[]>('tasks').then(response => {
                setTasks(response.data)
            })
        }
    },[])

    const handleTask = async (id: string) => {
        const token = localStorage.getItem('@todo:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            await api.put<Task>(`task/${id}`).then(response => {
            })
        }
        setTasks(tasks.map(task => {
            if(task.id === id){
                task['completed'] = !task['completed'];
                console.log(task.completed);

            }
            return task
        }))
    }

    const handleDeleteTask = async (id: string) => {
        const token = localStorage.getItem('@todo:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            await api.delete(`task/${id}`)
        }
        const newListTask = tasks.filter(task => {
            if(task['id']!==id){
                return task
            }
        })

        setTasks(newListTask)
    }

    const updateTasks = async () => {
        const token = localStorage.getItem('@todo:token')

        if(token){
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<Task[]>('tasks').then(response => {
                setTasks(response.data)
            })
        }
    }


    return (
        <TaskContext.Provider value={{tasks, handleTask, handleDeleteTask, updateTasks}}>
            {props.children}
        </TaskContext.Provider>
    )
}