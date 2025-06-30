import { AddTaskModal } from "@/components/module/tasks/AddTask"
import TaskCard from "@/components/module/tasks/TaskCard"
import { selecetFilter, selecetTask } from "@/redux/features/task/taskSlice"
import { useAppSelector } from "@/redux/hooks"

export default function Task() {
  const tasks= useAppSelector(selecetTask)
  const filter= useAppSelector(selecetFilter)

  // console.log(tasks)
  // console.log(filter)

  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 px-5">
        <div className=" flex justify-between items-center">
          <h1>Tasks</h1>
          <AddTaskModal/>
        </div>
        <div className=" space-y-5 mt-5">
          {
            tasks.map((task)=>(
              <TaskCard task={task} key={task.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}
