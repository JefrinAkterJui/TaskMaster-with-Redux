import type { RootSatate } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface InitialState {
    tasks:ITask [];
    filter:"all" | "high" |"medium" | "low"
}

const initialState: InitialState={
    tasks: [],
    filter:"all"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask: (state, action : PayloadAction<ITask>)=>{
            const id = uuidv4()
            const taskData ={
                ...action.payload,
                id,
                isCompleted: false
            }

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