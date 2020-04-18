export const GET_LOGIN_REQUEST = (params: {login: string, password: string}) => ({ type: 'GET_LOGIN_REQUEST', payload: params});
export const GET_LOGIN_SUCCESS = () => ({ type: 'GET_LOGIN_SUCCESS'});
export const GET_LOGIN_FAILED = (errors) => ({ type: 'GET_LOGIN_FAILED', payload: errors});
