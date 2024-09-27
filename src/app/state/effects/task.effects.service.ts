import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TaskService } from '../../services/task.service';
import { map, tap } from 'rxjs';
import { createTask, getAllTask, getTaskCompleted, getTaskPending, setAllTask, updateStatus } from '../actions/task.action';

@Injectable({
  providedIn: 'root'
})
export class TaskEffectsService {
	actions$ = inject(Actions);
	taskServie = inject(TaskService);

	createdTask$ = createEffect(() => 
		this.actions$.pipe(
			ofType(createTask),
			tap((r) => this.taskServie.saveTask(r.task)),
			map(() => setAllTask({ tasks: this.taskServie.getTask()}))
		)
	)

	updateStatus$ = createEffect(() => 
		this.actions$.pipe(
			ofType(updateStatus),
			tap((r) => this.taskServie.changeStatus(r.id)),
			map(() => setAllTask({ tasks: this.taskServie.getTask()}))
		)
	)

	taskComplete$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getTaskCompleted),
			map(() => setAllTask({ tasks: this.taskServie.getTaskComplete()}))
		)
	)

	taskPending$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getTaskPending),
			map(() => setAllTask({ tasks: this.taskServie.getTaskPending()}))
		)
	)

	taskGetAll$ = createEffect(() => 
		this.actions$.pipe(
			ofType(getAllTask),
			map(() => setAllTask({ tasks: this.taskServie.getTask()}))
		)
	)
}
