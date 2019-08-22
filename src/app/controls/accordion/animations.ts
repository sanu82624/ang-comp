import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = trigger('changeContentSize', [
    state('hide', style({
      height: '0px',
      'min-height': '0px'
    })),
    state('show', style({
      height: 'auto',
      'min-height': '30px'
    }),
    {params: { listHeight: '*'}}),
    transition('hide=>show', animate('300ms')),
    transition('show=>hide', animate('300ms'))
  ]
);
