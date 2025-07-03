import { AddTaskModal } from '@/components/module/tasks/AddTask'
import TaskCard from '@/components/module/tasks/TaskCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useGetTaskQuery } from '@/redux/api/baseApi'
import type { ITask } from '@/types'

export default function Task() {
    const {data , isError , isLoading} = useGetTaskQuery(undefined)

    // console.log({data , isError, isLoading})

    if(isLoading){
      return <p>Loding....</p>
    }

  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 px-5">
        <div className=" flex justify-end gap-5 items-center">
          <h1 className=' mr-auto'>Tasks</h1>
          <Tabs defaultValue='all'>
            <TabsList className=' grid w-full grid-cols-4'>
              <TabsTrigger  value="all">All</TabsTrigger>
              <TabsTrigger  value="low">Low</TabsTrigger>
              <TabsTrigger  value="medium">Medium</TabsTrigger>
              <TabsTrigger  value="high">High</TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal />
        </div>
        <div className=" space-y-5 mt-5">
          {!isLoading && data.tasks.map((task: ITask ) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  )
}
