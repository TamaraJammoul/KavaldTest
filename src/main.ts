import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from '@root/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from '@root/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),
  importProvidersFrom([BrowserModule, BrowserAnimationsModule])
  ],
});