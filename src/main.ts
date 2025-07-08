import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Load GA4 from the working HTML pattern
(function () {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-FH8LQY4GFP';
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    console.log('[GA] gtag fired:', args);
    window.dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-FH8LQY4GFP', {
    page_path: window.location.pathname + window.location.search
  });

  setTimeout(() => {
    gtag('event', 'page_view', {
      page_path: window.location.pathname + window.location.search
    });

    if (window.location.search.includes('utm_')) {
      gtag('event', 'session_start');
    }
  }, 250);
})();

// Bootstrap Angular AFTER GA is initialized
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error('[GA] Angular bootstrap failed', err));