import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hometask',
  standalone: true,
  imports: [
		MatButtonModule,
		RouterLink
	],
  templateUrl: './hometask.component.html',
  styleUrls: ['./hometask.component.scss']
})
export class HometaskComponent {

}
