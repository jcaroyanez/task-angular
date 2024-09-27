import { Component, inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { TaskState } from '../../../model/store';
import { selectorTask } from '../../../state/selector/task.selector';
import { ListTasksComponent } from '../list-tasks/list-tasks.component';
import { FilterStatus, Task } from '../../../model/taks';
import { getAllTask, getTaskCompleted, getTaskPending, updateStatus } from '../../../state/actions/task.action';
import { FilterTaskComponent } from '../filter-task/filter-task.component';

@Component({
  selector: 'app-hometask',
  standalone: true,
  imports: [
		MatButtonModule,
		RouterLink,
		ListTasksComponent,
		FilterTaskComponent
	],
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HometaskComponent implements OnInit {
	store = inject(Store<TaskState>);
	listTasks: Task[] = [];
	status = '';

	ngOnInit(): void {
		this.store.select(selectorTask).subscribe((tasks) => {
			this.listTasks = tasks;
		})
	}

	onChageStatusTask(id: string) {
		this.store.dispatch(updateStatus({ id }));
	}

	setStatusStore() {
		if(this.status === FilterStatus.completed) {
			this.store.dispatch(getTaskCompleted());
		} else if (this.status === FilterStatus.pending) {
			this.store.dispatch(getTaskPending());
		} else {
			this.store.dispatch(getAllTask());
		}
	}

	onChangeFilter(value: string) {
		this.status = value;
		this.setStatusStore();
	}
}
