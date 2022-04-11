import {
  trigger,
  transition,
  style,
  query,
  animate,
} from '@angular/animations';

//The trigger name of routeAnimations must match the trigger used in the app component HTML.
//Using wildcard syntax like * <=> * applies the default animation to all routes.
//When an animation is triggered we have access the the previous page via the :leave selector,
// and the current page via the :enter selector. We can query these elements to style and animate them.

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    // Set a default  style for enter and leave
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    // Animate the new page in
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);
