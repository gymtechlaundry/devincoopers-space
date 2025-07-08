// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Function to load Google Analytics and bootstrap the app
function loadGAAndBootstrap(): void {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FH8LQY4GFP';

  script.onload = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-FH8LQY4GFP', {
      debug_mode: true,
      page_path: window.location.pathname + window.location.search
    });

    // Optional: force session_start if UTM is detected
    if (window.location.search.includes('utm_')) {
      gtag('event', 'session_start');
    }

    // Bootstrap Angular app
    bootstrapApplication(AppComponent, appConfig)
      .catch((err) => console.error(err));
  };

  document.head.appendChild(script);
}

loadGAAndBootstrap();