
import App from "@/App";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router"; 

const router =createBrowserRouter([
    {
        path:'/',
        Component: App,
        children:[
            {
                index: true,
                Component: Task
            },
            {
                path:'users',
                Component: User
            },
            {
                path:'tasks',
                Component: Task
            }
        ]
    }
])

export default router