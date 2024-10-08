import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/task/home-task/home-task.component')
		.then((c) => c.HometaskComponent)
	},
	{
		path: 'created-task',
		loadComponent: () => import('./components/task/create-task/create-task.component')
		.then((c) => c.CreateTaskComponent)
	}
];
