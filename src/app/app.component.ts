import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/shared/container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	imports: [
		RouterOutlet, 
		ContainerComponent
	],
	standalone: true,
})
export class AppComponent {
  title = 'manager-tasks';
}
