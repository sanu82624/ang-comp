import { trigger, state, style, animate, transition } from '@angular/animations';

export const Animations = trigger('changeDivSize', [
    state('initial', style({
      height: '0px',
      border: '0px'
    })),
    state('final', style({
      height: '{{ listHeight }}',
      border: 'solid 1px gray',
      'border-top': '0px'
    }),
    {params: { listHeight: '*'}}),
    transition('initial=>final', animate('300ms')),
    transition('final=>initial', animate('300ms'))
  ]
);
