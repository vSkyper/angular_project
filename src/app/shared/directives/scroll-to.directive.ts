import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]',
})
export class ScrollToDirective {
  @Input()
  public target: string = '';

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.preventDefault();
    
    const targetElement = document.querySelector(this.target);
    if (targetElement === null) return;

    targetElement!.scrollIntoView({behavior: 'smooth'});
  }

  constructor() {}
}
