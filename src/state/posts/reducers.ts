import defaultState from './state';

export const posts = (posts: any = defaultState, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return posts;
        case 'SHOW_COMPLETED':
            return posts;
        default:
            return posts;
    }
};