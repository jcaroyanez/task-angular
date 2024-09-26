import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/task/hometask/hometask.component')
		.then((c) => c.HometaskComponent)
	},
	{
		path: 'created-task',
		loadComponent: () => import('./components/task/create-task/create-task.component')
		.then((c) => c.CreateTaskComponent)
	}
];
