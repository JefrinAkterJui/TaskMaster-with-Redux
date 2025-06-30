import type { RootSatate } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks:ITask [];
    filter:"all" | "high" |"medium" | "low"
}

const initialState: InitialState={
    tasks:[
        {
            id:"xgfdgfgfgfdfg",
            title:"hello Dear Tuku",
            discription:"Dear Tuku , Learning MongoDB",
            dueDate:"2025-05",
            isCompleted: false,
            priority:"High"
        },
        {
            id:"xgfdgfgfgfdfg2",
            title:"hello Dear Tuku",
            discription:"Dear Meo , Learning Expess",
            dueDate:"2025-05",
            isCompleted: false,
            priority:"Low"
        },
        {
            id:"xgfdgfgfgfdfg23",
            title:"This is task Master",
            discription:"I am learning Redux.............",
            dueDate:"2025-05",
            isCompleted: false,
            priority:"Medium"
        }
    ],
    filter:"all"
}
const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{},
})
export const selecetTask = (state : RootSatate)=>{
    return state.todo.tasks
}
export const selecetFilter = (state : RootSatate)=>{
    return state.todo.tasks
}

export default taskSlice.reducer