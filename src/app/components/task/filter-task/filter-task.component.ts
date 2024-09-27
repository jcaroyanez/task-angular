import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FilterStatus } from '../../../model/taks';

@Component({
	selector: 'app-filter-task',
	standalone: true,
	imports: [MatButtonModule],
	templateUrl: './filter-task.component.html',
	styleUrls: ['./filter-task.component.scss']
})
export class FilterTaskComponent {
	@Output() onChange = new EventEmitter<string>();
	status = FilterStatus.all;
	FilterStatus = FilterStatus;

	setStatus(value: FilterStatus) {
		this.status = value;
		this.onChange.emit(this.status)
	}

	getColorStatus(value: string) {
		return this.status === value ? 'primary' : 'secondary';
	}
}
