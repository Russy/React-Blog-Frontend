import HTTPClient from '../HTTPClient';

const endpoint = process.env.REACT_APP_API_URL;
export const Api = {

    login: async (params) => {
        return await HTTPClient.post(`${endpoint}/login`, params);
    },

    getPosts: async (page: string = '1') => {
        const response = await fetch(`${endpoint}/posts?page=${page}`);
        const data = await response.json();
        return data.data;
    },
    getPostsByTags: async ({tag, page = 1}) => {
        const response = await fetch(`${endpoint}/tags/${tag}?page=${page}`);
        const data = await response.json();
        return data.data;
    },
    getPost: async (slug: string) => {
        const response = await fetch(`${endpoint}/post/${slug}`);
        const data = await response.json();
        return data.data;
    },
    searchPosts: async (query: string) => {
        const response = await fetch(`${endpoint}/search`, {
            method: 'POST',
            body: JSON.stringify({query}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.data;
    }
};