import { createReducer, on } from "@ngrx/store";
import { setAllTask } from "../actions/task.action";
import { TaskState } from "../../model/store";

export const initialState: TaskState = {
	tasks: []
}

export const taskReducer = createReducer(
	initialState,
	on(setAllTask, (state, { tasks }) => ({ ...state, tasks: [...tasks] }))
)