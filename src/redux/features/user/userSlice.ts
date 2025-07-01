import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "@/types";
import type { RootSatate } from "@/redux/store";


interface InitialState{
    users: IUser[]
}

const initialState : InitialState={
    users:[]
}

type DraftUser = Pick<IUser, "name">

const createUser =(userData : DraftUser): IUser =>{
    return {id: nanoid() , ...userData}
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers:{
        addUser:(state , action : PayloadAction<IUser>)=>{
            const userData = createUser(action.payload)
            state.users.push(userData)
        },
        deleteUser:(state, action : PayloadAction<string>)=>{
            console.log(action)
            state.users = state.users.filter((user)=> user.id !== action.payload)
        } 
    }
});

export const selectUser = (state : RootSatate)=>{
    return state.user.users
}

export const {addUser , deleteUser} = userSlice.actions

export default userSlice.reducer