import type { RootSatate } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tasks:ITask [];
    filter:"all" | "high" |"medium" | "low"
}

const initialState: InitialState={
    tasks: [
        {
            id:"dA9G55UCzDYLc5M3HGWT2",
            isCompleted:false,
            title:"Jui",
            discription:"you potas meo ",
            priority:"high",
            dueDate:"2025-06-10T18:00:00.000Z"
        }
    ],
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
        },
        toggleState:(state, action: PayloadAction<string>)=> {
            state.tasks.forEach((task)=>
                task.id=== action.payload ? (task.isCompleted = !task.isCompleted) : task 
            )
            // const taskToToggle = state.tasks.find(task => task.id === action.payload);
            // if (taskToToggle) {
            //     taskToToggle.isCompleted = !taskToToggle.isCompleted;
            // }
        },
        deleteTask:(state , action: PayloadAction<string>)=>{
            console.log(action)
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload)
        },
        createFilter: (state, action: PayloadAction<"all" | "high" | "medium" | "low">)=>{
            state.filter = action.payload
        }
    },
})
export const selecetTask = (state : RootSatate)=>{
    const filter = state.todo.filter;

    if(filter === 'low'){
        return state.todo.tasks.filter((task)=> task.priority === "low")
    }else if(filter==='medium'){
        return state.todo.tasks.filter((task)=>task.priority ==="medium")
    }else if(filter === 'high'){
        return state.todo.tasks.filter((task)=>task.priority === "high")
    }else{
        return state.todo.tasks
    }

    return state.todo.tasks
}
export const selecetFilter = (state : RootSatate)=>{
    return state.todo.tasks
}

export const {addTask, toggleState, deleteTask, createFilter} = taskSlice.actions

export default taskSlice.reducer 