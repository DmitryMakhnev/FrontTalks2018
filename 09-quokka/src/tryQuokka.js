// just see https://quokkajs.com/docs/?editor=jb#getting-started


// import + console

import { sum } from './mathModule';

console.log(sum(1, 2));



// Compare

const junior = {
    jobTitle: 'frontend developer',
    experience: 1000,
    skills: [
        'react'
    ]
};

const senior = {
    jobTitle: 'frontend developer',
    experience: 100500,
    skills: [
        'patterns',
        'architecture',
        'soft skills'
    ]
};

junior, senior



// Coverage

export function calculate (a, b) {
    if (a === 0 || b === 0) {
        return a || b;
    }

    return a + b;
}

calculate(0, 1); /*?*/



// Live Comments

const data = [1, 3, 2, 4];

data.map(item => item * 2) /*?.*/
    .sort() /*?*/
    .filter(item => item > 3) /*? $[1]*/
    .reduce(
        (result, item) => {
            return result + item;
        },
        0
    ); /*?*/


