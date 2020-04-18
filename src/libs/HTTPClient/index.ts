import { Simulate } from 'react-dom/test-utils';

export default class HTTPClient {
    static async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.status === 200) {
            return await response.json();
        }
        throw new Error('Invalid credentials');
    }

    static async get(url, data) {
        let params = Object.keys(data).map((key) => {
            return `${key} = ${data[key]}`
        });
        const response = await fetch(`${url}?${params.join('&')}`);
        return await response.json();
    }

}