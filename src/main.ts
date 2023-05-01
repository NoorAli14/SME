// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from '@angular/router';
import { appRoutes } from "./app/app-routes";
import { AppComponent } from "./app/app.component";
import { Interceptor } from './app/services/interceptor.service';

// import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([Interceptor])),
    provideRouter(appRoutes),
  ],
});