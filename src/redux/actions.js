import { Req_users_pending , Req_users_success, Req_users_failed } from './constants';

export const requestUsers =  () => (dispatch) => {
    dispatch({type: Req_users_pending});
    return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => dispatch({type: Req_users_success, payload: users }))
    .catch(err =>  dispatch({type: Req_users_failed, payload: err }));
}  