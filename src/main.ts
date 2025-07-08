import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

function initializeGA(): Promise<void> {
  return new Promise((resolve, reject) => {
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

      if (window.location.search.includes('utm_')) {
        gtag('event', 'session_start');
      }

      resolve();
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

// Initialize GA, then bootstrap Angular
initializeGA()
  .then(() => bootstrapApplication(AppComponent, appConfig))
  .catch((err) => console.error('GA or App bootstrap failed', err));