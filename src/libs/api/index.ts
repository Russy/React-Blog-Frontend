const endpoint = process.env.REACT_APP_API_URL;
export const Api = {
    login: (params) => {

    },
    getPosts: async () => {
        const response = await fetch(`${endpoint}/posts`);
        const data = await response.json();
        return data.data;
    },
    getPost: async (slug: string) => {
        const response = await fetch(`${endpoint}/post/${slug}`);
        const data = await response.json();
        return data.data;
    }
};