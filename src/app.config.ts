import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing";

export const appConfig: ApplicationConfig = {
  providers: [
		provideHttpClient(withFetch()),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
	]
};
