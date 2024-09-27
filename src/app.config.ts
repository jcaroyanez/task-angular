import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, isDevMode } from "@angular/core";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { taskReducer } from "./app/state/reducers/task.reducer";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { TaskService } from "./app/services/task.service";
import { provideEffects } from '@ngrx/effects';
import { TaskEffectsService } from "./app/state/effects/task.effects.service";

export const appConfig: ApplicationConfig = {
	providers: [
		provideHttpClient(withFetch()),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		importProvidersFrom([BrowserAnimationsModule]),
		provideStore({
			task: taskReducer
		}),
		provideEffects(TaskEffectsService)
		,
		provideStoreDevtools({
			maxAge: 25, // Retains last 25 states
			logOnly: !isDevMode(), // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
			trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
			traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
			connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
		}),
		TaskService
	]
};
