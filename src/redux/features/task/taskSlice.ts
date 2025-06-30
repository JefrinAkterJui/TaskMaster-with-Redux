import type { RootSatate } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks:ITask [];
    filter:"all" | "high" |"medium" | "low"
}

const initialState: InitialState={
    tasks: [],
    filter:"all"
}

type DraftTask =Pick<ITask , "title" | "discription" | "priority" | "dueDate">

const createTask =(taskData : DraftTask): ITask =>{
    return {id: nanoid(), isCompleted:false , ...taskData}
}

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask: (state, action : PayloadAction<ITask>)=>{
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        }
    },
})
export const selecetTask = (state : RootSatate)=>{
    return state.todo.tasks
}
export const selecetFilter = (state : RootSatate)=>{
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer 