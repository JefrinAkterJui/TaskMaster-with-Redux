import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "./features/task/taskSlice"
import { ImageOff } from "lucide-react";
import userReducer from "./features/user/userSlice"


export const store = configureStore({
    reducer:{
        todo: taskReducer,
        user: userReducer
    },
})

export type RootSatate =  ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch