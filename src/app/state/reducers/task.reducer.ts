import { Task } from "../../model/taks"

interface TaskState {
	tasks: Task[]
}

export const initialState: TaskState = {
	tasks: []
}