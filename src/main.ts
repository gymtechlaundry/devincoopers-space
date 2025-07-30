import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { authInterceptor } from './app/services/auth.interceptor';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
     provideHttpClient(withInterceptors([authInterceptor])),
  ]
}).catch((err) => console.error(err));

// src/main.ts
document.addEventListener('scroll', () => {
  console.log('[main.ts] Native scroll on <body> detected');
});
