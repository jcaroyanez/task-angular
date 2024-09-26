import { createAction, props } from "@ngrx/store";
import { Task } from "../../model/taks";

export const createTask = createAction('[Task] createTask', props<{ task: Task }>());