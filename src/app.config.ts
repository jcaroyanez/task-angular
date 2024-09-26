import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from "@angular/core";
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from "@angular/router";
import { routes } from "./app/app-routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule]),
    provideStore()
]
};
