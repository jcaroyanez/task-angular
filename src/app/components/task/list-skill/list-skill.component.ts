import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../model/taks';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-skill',
  standalone: true,
  imports: [
		NgFor,
		MatButtonModule,
		MatIconModule
	],
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.scss']
})
export class ListSkillComponent {
	@Input() persons!: Person[];
	@Output() onDelete = new EventEmitter<string>();

	deletePerson(event: Event, id: string) {
		event.preventDefault();
		this.onDelete.emit(id);
	}

	trackPerson(_: number, person: Person) {
		return person.id;
	}
}
