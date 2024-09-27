import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { ListSkillComponent } from '../list-skill/list-skill.component';
import { Person, Task } from '../../../model/taks';
import { v4 as uuidv4 } from 'uuid';
import { ErrorFormComponent } from '../../shared/error-form/error-form.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
	selector: 'app-form-task',
	standalone: true,
	templateUrl: './form-task.component.html',
	styleUrls: ['./form-task.component.scss'],
	imports: [
		MatChipsModule,
		MatIconModule,
		NgFor,
		MatFormFieldModule,
		MatButtonModule,
		ReactiveFormsModule,
		ListSkillComponent,
		ErrorFormComponent,
		MatSnackBarModule
	]
})
export class FormTaskComponent {
	@Output() onSave = new EventEmitter<Task>();
	addOnBlur = true;
	readonly separatorKeysCodes = [ENTER, COMMA] as const;
	skills: string[] = [];
	persons: Person[] = [];
	taskForm!: FormGroup;
	matSnackBar = inject(MatSnackBar);

	constructor() {
		this.taskForm = new FormGroup({
			task: new FormGroup({
				nameTask: new FormControl('', [Validators.required]),
				dateTask: new FormControl('', [Validators.required])
			}),
			person: new FormGroup({
				namePerson: new FormControl('', [Validators.required, Validators.minLength(5)]),
				age: new FormControl('', [Validators.required, Validators.min(18)]),
				skill: new FormControl('', [Validators.required])
			})
		})
	}

	add(event: MatChipInputEvent): void {
		const value = (event.value || '').trim();

		if (value) {
			this.skills.push(value);
		}

		event.chipInput!.clear();
	}

	remove(skill: string): void {
		const index = this.skills.indexOf(skill);

		if (index >= 0) {
			this.skills.splice(index, 1);
		}
	}

	edit(skill: string, event: MatChipEditedEvent) {
		const value = event.value.trim();
		if (!value) {
			this.remove(skill);
			return;
		}

		const index = this.skills.indexOf(skill);
		if (index >= 0) {
			this.skills[index] = value;
		}
	}

	isRepeatPerson(name: string) {
		return this.persons.filter((p) => p.name === name).length
	}

	sendPerson(event: Event) {
		event.preventDefault();

		if(!this.taskForm.get('person')?.valid) {
			this.taskForm.get('person')?.markAllAsTouched();
			return;
		}

		const name = this.taskForm.get('person.namePerson')?.value;

		if (this.isRepeatPerson(name)) {
			this.matSnackBar.open('Esta persona ya fue añadida', '', { duration: 2000 });
			return;
		}

		const person: Person = {
			id: uuidv4(),
			name,
			age: this.taskForm.get('person.age')?.value,
			skill: this.skills
		}

		this.skills = [];
		this.taskForm.get('person')?.reset();
		this.persons.push(person);
	}

	deletePerson(id: string) {
		this.persons = this.persons.filter((p) => p.id !== id);
	}

	onSubmit() {
		if(!this.taskForm.get('task')?.valid) {
			this.taskForm.get('task')?.markAllAsTouched();
			return
		}
		
		if(!this.persons.length) {
			this.matSnackBar.open('añadir minimo una persona', '', { duration: 2000 });
			this.taskForm.get('person')?.markAllAsTouched();
			return;
		}

		const taks: Task = {
			name: this.taskForm.get('task.nameTask')?.value,
			date: this.taskForm.get('task.dateTask')?.value,
			persons: this.persons,
			status: false,
		}

		this.onSave.emit(taks);
		this.taskForm.get('person')?.reset();
		this.taskForm.get('task')?.reset();
		this.persons = [];
	}
}
