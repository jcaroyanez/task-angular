import { Component, inject } from '@angular/core';
import { FormTaskComponent } from '../form-task/form-task.component';
import { Task } from '../../../model/taks';
import { Store } from '@ngrx/store';
import { TaskState } from '../../../model/store';
import { createTask } from '../../../state/actions/task.action';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
	selector: 'app-create-task',
	standalone: true,
	templateUrl: './create-task.component.html',
	styleUrls: ['./create-task.component.scss'],
	imports: [
		FormTaskComponent,
		RouterLink,
		MatButtonModule
	]
})
export class CreateTaskComponent {
	store = inject(Store<TaskState>);

	onSavePerson(task: Task) {
		this.store.dispatch(createTask({ task }));
	}
}
