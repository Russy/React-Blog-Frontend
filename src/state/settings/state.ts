export type Option = {
    id?: number,
    name: string,
    value: string
}

export type SettingsStoreState = {
    is_fetching: boolean,
    errors: string[],
    options: Option[]
};

const defaultState: SettingsStoreState = {
    is_fetching: false,
    errors: [],
    options: []
};

export default defaultState;