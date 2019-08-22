import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = trigger('fadeShowNotification', [
    state('fade', style({
      opacity: 0
    })),
    state('show', style({
      opacity: 1
    })),
    transition('fade=>show', animate('900ms')),
    transition('show=>fade', animate('700ms'))
  ]
);
