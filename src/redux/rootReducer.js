import { Req_users_pending , Req_users_success, Req_users_failed } from './constants';

const initState = {
    isPending: false,
    users: [],
    err: ''
}
export const rootReducer = (state=initState, action = {}) => {
    switch(action.type) {
        case  Req_users_pending:
            return Object.assign({}, state, { isPending: true })
        case  Req_users_success:
            return Object.assign({}, state, { users: action.payload ,isPending: false })
        case  Req_users_failed:
            return Object.assign({}, state, { err: action.payload ,isPending: false })
        default:
        return state;
        }
}