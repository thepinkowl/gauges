import { trigger, transition, style, animate, state, query, stagger, animateChild } from '@angular/animations';

export const testAnimation = trigger(
    'testAnimation',
    [
        transition(
            '* => *',
            [
                style({ opacity: 1 }),
                animate('3s ease-out',
                    style({ opacity: 0 }))
            ]
        ),
        transition(
            ':enter',
            [
                style({ opacity: 0 }),
                animate('500ms ease-out',
                    style({ opacity: 1 }))
            ]
        ),
        transition(
            ':leave',
            [
                style({ height: '*', opacity: 1 }),
                animate('300ms ease-in-out',
                    style({ height: 0, opacity: 0.5 }))
            ]
        )
    ]
);

export const listAnimation = trigger('list', [
    transition(':enter', [
        // child animation selector + stagger
        query('@items',
            stagger(300, animateChild()), { optional: true }
        )
    ]),
]);

export const itemsAnimation = trigger('items', [
    // cubic-bezier for a tiny bouncing feel
    transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
            style({ transform: 'scale(1)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)', opacity: 1, height: '*' }),
        animate('1s cubic-bezier(.8,-0.6,0.2,1.5)',
            style({ transform: 'scale(0.5)', opacity: 0, height: '0px', margin: '0px' }))
    ]),
]);
