export interface ITask {
  id: string;
  title: string;
  discription: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "high" | "low" | "medium";
  assignTo: string | null
}

export interface IUser {
  id: string;
  name:string
}