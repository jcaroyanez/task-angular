import { Component } from '@angular/core';
import { FormTaskComponent } from '../form-task/form-task.component';
import { Task } from '../../../model/taks';

@Component({
  selector: 'app-create-task',
  standalone: true,
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
	imports: [FormTaskComponent]
})
export class CreateTaskComponent {
	onSavePerson(task: Task) {
		console.log({ task });
	}
}
