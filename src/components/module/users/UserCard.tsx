import { Button } from "@/components/ui/button"
import { deleteUser } from "@/redux/features/user/userSlice"
import { useAppDispatch } from "@/redux/hooks"
import type { IUser } from "@/types"
import { Trash2 } from "lucide-react"

interface IProps{
  user : IUser
}

export default function UserCard({user}: IProps) {
  const dispatch = useAppDispatch()
  console.log(user)

  return (
    <div className="border px-5 py-3 rounded-md ">
        <div className='flex justify-between items-center'>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <h1>{user.name}</h1>
              </div>
            </div>
                <div className="flex gap-3 items-center">
                <Button onClick={()=> {console.log('hum hocche'), dispatch(deleteUser(user.id))}} variant="link" className="p-0 text-red-500">
                  <Trash2 />
                </Button>
            </div>
        </div>
    </div>
  )
}


