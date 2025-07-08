import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

function initializeGA(): Promise<void> {
  console.log('[GA] Loading GA script...');

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FH8LQY4GFP';

    script.onload = () => {
      console.log('[GA] Script loaded successfully');

      // Define gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        console.log('[GA] gtag fired:', args);
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      const pagePath = window.location.pathname + window.location.search;

      // Configure GA (must come before firing any events)
      gtag('js', new Date());
      gtag('config', 'G-FH8LQY4GFP', {
        page_path: pagePath
      });

      // Small delay to ensure config is fully registered before sending events
      setTimeout(() => {
        gtag('event', 'page_view', {
          page_path: pagePath
        });

        if (window.location.search.includes('utm_')) {
          gtag('event', 'session_start');
        }

        resolve();
      }, 250); // Slight buffer to allow config to settle
    };

    script.onerror = () => {
      console.error('[GA] Failed to load GA script');
      reject();
    };

    document.head.appendChild(script);
  });
}

// Load GA first, then bootstrap Angular
initializeGA()
  .then(() => {
    console.log('[GA] Bootstrapping Angular');
    bootstrapApplication(AppComponent, appConfig)
      .catch(err => console.error('[GA] Angular bootstrap failed', err));
  })
  .catch(err => console.error('[GA] GA initialization failed', err));