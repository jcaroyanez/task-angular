import { Injectable } from '@angular/core';
import { Task } from '../model/taks';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	private tasks: Task[] = [];

	getTask() {
		return this.tasks;
	}

	saveTask(task: Task) {
		this.tasks = [...this.tasks, { ...task, id: uuidv4() }];
	}

	changeStatus(id: string) {
		const task = this.tasks.find((t) => t.id === id);
		this.tasks = this.tasks.map((t) => t.id === id ? { ...task, status: !t.status } : t)
	}

	getTaskComplete() {
		return this.tasks.filter((t) => t.status);
	}

	getTaskPending() {
		return this.tasks.filter((t) => !t.status);
	}
}
