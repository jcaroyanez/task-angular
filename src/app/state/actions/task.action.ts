import { createAction, props } from "@ngrx/store";
import { Task } from "../../model/taks";

export const createTask = createAction('[Task] createTask', props<{ task: Task }>());
export const setAllTask = createAction('[Task] setAllTask', props<{ tasks: Task[] }>());
export const updateStatus = createAction('[Task] updateStatus', props<{ id: string }>());
export const getTaskCompleted = createAction('[Task] getTaskCompleted');
export const getTaskPending = createAction('[Task] getTaskPending');
export const getAllTask = createAction('[Task] getAllTask');