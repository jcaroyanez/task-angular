import { Component, Input } from '@angular/core';
import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { AbstractControl } from '@angular/forms';

@Component({
	selector: 'app-error-form',
	standalone: true,
	imports: [
		NgIf,
		JsonPipe,
		NgFor
	],
	templateUrl: './error-form.component.html',
	styleUrls: ['./error-form.component.scss']
})
export class ErrorFormComponent {
	@Input() set control(value: AbstractControl) {
		this._control = value;
		this.keysError = Object.keys(value?.errors || {});
	}
	_control!: AbstractControl;
	keysError: string[] = [];
}
