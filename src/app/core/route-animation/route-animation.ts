import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

const animationType = '0.5s ease-in-out';

const leftToRight = [
    query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate(animationType,
                style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate(animationType,
                style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
    ])
];
const rightToLeft = [
    query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate(animationType,
                style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate(animationType,
                style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
    ])
];

export const slideInAnimation = 
    trigger('routeAnimations', [
        transition('home => *', leftToRight),
    ]);