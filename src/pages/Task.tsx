import { AddTaskModal } from '@/components/module/tasks/AddTask'
import TaskCard from '@/components/module/tasks/TaskCard'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { createFilter, selecetTask } from '@/redux/features/task/taskSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Task() {
  const tasks = useAppSelector(selecetTask)

  const dispatch = useAppDispatch()
  // console.log(tasks)
  // console.log(filter)

  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 px-5">
        <div className=" flex justify-end gap-5 items-center">
          <h1 className=' mr-auto'>Tasks</h1>
          <Tabs defaultValue='all'>
            <TabsList className=' grid w-full grid-cols-4'>
              <TabsTrigger onClick={()=> dispatch(createFilter("all"))} value="all">All</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(createFilter("low"))} value="low">Low</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(createFilter("medium"))} value="medium">Medium</TabsTrigger>
              <TabsTrigger onClick={()=> dispatch(createFilter("high"))} value="high">High</TabsTrigger>
            </TabsList>
          </Tabs>
          <AddTaskModal />
        </div>
        <div className=" space-y-5 mt-5">
          {tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
          ))}
        </div>
      </div>
    </>
  )
}
