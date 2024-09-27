import { createReducer, on } from "@ngrx/store";
import { createTask, setAllTask } from "../actions/task.action";
import { TaskState } from "../../model/store";

export const initialState: TaskState = {
	tasks: []
}

export const taskReducer = createReducer(
	initialState,
	//on(createTask, (state, { task }) => ({ ...state, tasks: [...state.tasks, { ...task }] }))
	on(setAllTask, (state, { tasks }) => ({ ...state, tasks: [...tasks] }))
)