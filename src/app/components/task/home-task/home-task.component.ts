import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { TaskState } from '../../../model/store';
import { selectorTask } from '../../../state/selector/task.selector';

@Component({
  selector: 'app-hometask',
  standalone: true,
  imports: [
		MatButtonModule,
		RouterLink
	],
  templateUrl: './home-task.component.html',
  styleUrls: ['./home-task.component.scss']
})
export class HometaskComponent implements OnInit {
	store = inject(Store<TaskState>)

	ngOnInit(): void {
		this.store.select(selectorTask).subscribe(console.log)
	}
}
