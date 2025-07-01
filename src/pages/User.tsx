import { AddUserModal } from '@/components/module/users/AddUser'
import UserCard from '@/components/module/users/UserCard'
import { selectUser } from '@/redux/features/user/userSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Task() {
  const users = useAppSelector(selectUser)

  const dispatch = useAppDispatch()
  // console.log(tasks)
  // console.log(filter)

  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 px-5">
        <div className=" flex justify-end gap-5 items-center">
          <h1 className=' mr-auto'>Usres</h1>
          <AddUserModal />
        </div>
        <div className=" space-y-5 mt-5">
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    </>
  )
}
