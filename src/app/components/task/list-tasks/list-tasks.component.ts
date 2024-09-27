import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Task } from '../../../model/taks';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-list-tasks',
  standalone: true,
  imports: [
		NgFor,
		NgIf,
		MatCheckboxModule
	],
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss'],
})
export class ListTasksComponent {
	@Input() tasks: Task[] = [];
	@Output() onChangeTask = new EventEmitter<string>();

	onChange(id: string) {
		this.onChangeTask.emit(id);
	}
}
