import HTTPClient from '../HTTPClient';
import { PostType } from '../../state/types';

const endpoint = process.env.REACT_APP_API_URL;
export const Api = {
    login: async (params) => {
        return await HTTPClient.post(`${endpoint}/login`, params);
    },
    getPosts: async (page: string = '1') => {
        const response = await HTTPClient.get(`${endpoint}/posts?page=${page}`);
        return response.data;
    },
    getPostsByTags: async ({tag, page = 1}) => {
        const response = await HTTPClient.get(`${endpoint}/tags/${tag}?page=${page}`);
        return response.data;
    },
    getPost: async (slug: string) => {
        const response = await HTTPClient.get(`${endpoint}/post/${slug}`);
        return response.data;
    },
    searchPosts: async (query: string) => {
        const response = await HTTPClient.post(`${endpoint}/search`, {query});
        return response.data;
    },
    admin: {
        getPosts: async (page: string = '1') => {
            const response = await HTTPClient.get(`${endpoint}/admin/posts?page=${page}`);
            return response.data;
        },
        getPost: async (slug: string) => {
            const response = await HTTPClient.get(`${endpoint}/admin/post/${slug}`);
            return response.data;
        },
        updatePost: async (post: PostType) => {
            const response = await HTTPClient.post(`${endpoint}/admin/post/update`, post);
            return response.data;
        },

        getTags: async () => {
            return await HTTPClient.get(`${endpoint}/admin/tags`);
        },
    }
};