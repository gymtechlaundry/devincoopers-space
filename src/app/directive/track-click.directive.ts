import { Directive, HostListener, Input } from '@angular/core';

declare let gtag: Function;

@Directive({
  selector: '[trackClick]',
  standalone: true
})
export class TrackClickDirective {
  @Input() trackCategory: string = 'click';
  @Input() trackLabel: string = '';
  @Input() disableTracking: boolean = false;

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent) {
    if (this.disableTracking) return;

    const target = event.currentTarget as HTMLElement;
    const href = (target as HTMLAnchorElement)?.getAttribute?.('href') || '';
    const hostname = window.location.hostname;

    let category = this.trackCategory;
    let label = this.trackLabel || href || target.innerText.trim();

    if (href) {
      const isExternal = href.startsWith('http') && !href.includes(hostname);
      const isDownload = /\.(pdf|zip|docx?|xlsx?)$/i.test(href);
      const isAnchor = href.startsWith('#');
      const isEmail = href.startsWith('mailto:');
      const isPhone = href.startsWith('tel:');

      if (isDownload) category = 'download';
      else if (isExternal) category = 'outbound';
      else if (isAnchor) category = 'anchor';
      else if (isEmail) category = 'contact_email';
      else if (isPhone) category = 'contact_phone';
    }

    gtag('event', 'click', {
      event_category: category,
      event_label: label,
      transport_type: 'beacon'
    });
  }
}