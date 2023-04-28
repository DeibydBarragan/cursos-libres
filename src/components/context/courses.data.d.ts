import { Course } from "./interfaces";

export const coursesData: Course[] = [
    {
        id: 1,
        name: 'React',
        description: 'React is a JavaScript library for building user interfaces.',
        regDate: '2020-01-01',
        endRegDate: '2020-01-31',
        startDate: '2020-02-01',
        endDate: '2020-02-29',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Angular is a platform for building mobile and desktop web applications.',
        regDate: '2020-03-01',
        endRegDate: '2020-03-31',
        startDate: '2020-04-01',
        endDate: '2020-04-30',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {
        id: 3,
        name: 'Vue',
        description: 'Vue is a progressive framework for building user interfaces.',
        regDate: '2020-05-01',
        endRegDate: '2020-05-31',
        startDate: '2020-06-01',
        endDate: '2020-06-30',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
    }
];