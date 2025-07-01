import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { addUser } from '@/redux/features/user/userSlice'
import type { IUser } from '@/types'
import { DialogDescription } from '@radix-ui/react-dialog'
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'

export function AddUserModal() {
  const form = useForm()

  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
    dispatch(addUser(data as IUser))
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" cursor-pointer">Add User</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>
        <DialogDescription className=" sr-only">
          this is dialog{' '}
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ''} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="mt-5">
              <Button type="submit">Save </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
