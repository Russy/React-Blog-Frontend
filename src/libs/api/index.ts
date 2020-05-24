import HTTPClient from '../HTTPClient';
import { PostType } from '../../state/types';
import { Options } from 'react-redux';

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
    getPages: async () => {
        const response = await HTTPClient.get(`${endpoint}/pages`);
        return response.data;
    },
    getPage: async (slug: string) => {
        const response = await HTTPClient.get(`${endpoint}/page/${slug}`);
        return response.data;
    },
    getOptions: async () => {
        const response = await HTTPClient.get(`${endpoint}/options`);
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
        deletePost: async (id: number) => {
            const response = await HTTPClient.get(`${endpoint}/admin/post/delete/${id}`);
            return response.data;
        },
        updatePost: async (post: PostType) => {
            const response = await HTTPClient.post(`${endpoint}/admin/post/update`, post);
            return response.data;
        },
        getTags: async () => {
            return await HTTPClient.get(`${endpoint}/admin/tags`);
        },
        postTag: async (tag) => {
            return await HTTPClient.post(`${endpoint}/admin/tag/update`, {title: tag});
        },
        deleteTag: async (id) => {
            return await HTTPClient.get(`${endpoint}/admin/tag/delete/${id}`);
        },

        getPages: async (page: string = '1') => {
            const response = await HTTPClient.get(`${endpoint}/admin/pages?page=${page}`);
            return response.data;
        },
        getPage: async (slug: string) => {
            const response = await HTTPClient.get(`${endpoint}/admin/page/${slug}`);
            return response.data;
        },
        updatePage: async (post: PostType) => {
            const response = await HTTPClient.post(`${endpoint}/admin/page/update`, post);
            return response.data;
        },
        deletePage: async (id: number) => {
            const response = await HTTPClient.get(`${endpoint}/admin/page/delete/${id}`);
            return response.data;
        },
        postOptions: async (options: Options[]) => {
            const response = await HTTPClient.post(`${endpoint}/admin/options`, {options});
            return response.data;
        },
    }
};