/**
 * Store to work with localstorage.
 */
export class Storage {

    /**
     * Save data object to localstorage.
     */
    public static set(field: string, data: {} | string): void {
        localStorage.setItem(field, JSON.stringify(data));
    }

    public static get(field: string) {
        const data = localStorage.getItem(field);

        return data !== null ? JSON.parse(data) : null;
    }
    /**
     * Remove all session data
     */
    public static remove(field: string) {
        localStorage.removeItem(field);
    }

    constructor() {
        throw new Error('StorageService class can\'t be instantiated');
    }
}
