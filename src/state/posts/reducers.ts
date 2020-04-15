import defaultState, { PostsStoreState } from './state';

export const posts = (posts: PostsStoreState = defaultState, {type, payload}) => {
    switch (type) {
        case 'GET_POSTS_REQUEST':
            return {
                ...posts,
                is_fetching: true
            };
        case 'GET_POSTS_SUCCESS':
            return {
                ...posts,
                posts: payload,
                is_fetching: false
            };
        default:
            return posts;
    }
};