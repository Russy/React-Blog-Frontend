import { Simulate } from 'react-dom/test-utils';

import { Storage } from '../storage';

export default class HTTPClient {
    static async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Storage.get('token')
            }
        });
        if (response.status === 200) {
            return await response.json();
        }
        throw new Error('Invalid credentials');
    }

    static async get(url, data = {}) {
        let params = Object.keys(data).map((key) => {
            return `${key} = ${data[key]}`;
        });

        let endpoint = params.length ? `${url}?${params.join('&')}` : `${url}`;
        const response = await fetch(`${endpoint}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Storage.get('token')
            }
        });
        return await response.json();
    }

}