import { Directive, ElementRef, Input, OnInit, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private observer?: IntersectionObserver;

  @Input() delay = 0;
  @Input() direction: 'up' | 'down' | 'left' | 'right' = 'up';

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;
    
    // Set initial state
    element.style.opacity = '0';
    element.style.transition = `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`;
    element.style.transitionDelay = `${this.delay}ms`;
    
    const translateMap = {
      up: 'translateY(40px)',
      down: 'translateY(-40px)',
      left: 'translateX(40px)',
      right: 'translateX(-40px)'
    };
    element.style.transform = translateMap[this.direction];

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate(0)';
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
