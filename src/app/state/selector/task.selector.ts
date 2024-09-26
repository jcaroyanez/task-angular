import { createSelector } from "@ngrx/store";
import { TaskState } from "../../model/store";
import { Task } from "../../model/taks";

interface StatesReducer {
	 task: {
		tasks: Task[]
	}
}
export const selectFeature = (state: StatesReducer) => state.task;

export const selectorTask = createSelector(
  selectFeature,
  (state: TaskState) => state.tasks
);