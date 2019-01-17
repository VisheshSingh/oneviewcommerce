import { Req_users_pending , Req_users_success, Req_users_failed } from './constants';

import { rootReducer } from './rootReducer';

const initState = {
    isPending: false,
    users: [],
    err: ''
}

// TESTING FOR NO USERS
it('should return initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({
        users: [],
        isPending: false,
        err: ""
    })
})

const mockUser = [
    {
        id: 1,
        name: 'John DOe',
        email: 'JOhndoe@gmail.com',
        address: {
            city: 'NYC'
        },
        company: {
            name: 'GMC'
        }
    }
]


// TESTING FOR PENDING REQUEST DURING LOAD
it('should handle Pending action', () => {
    expect(rootReducer(initState, {type: Req_users_pending, payload: {isPending: true}})).toEqual({
        users: [],
        isPending: true,
        err: ""
    })
})

// TESTING FOR SUCCESSFUL CALL TO API
it('should handle success action', () => {
    expect(rootReducer(initState, {type: Req_users_success, payload: mockUser})).toEqual({
        users: [{
            id: 1,
            name: 'John DOe',
            email: 'JOhndoe@gmail.com',
            address: {
                city: 'NYC'
            },
            company: {
                name: 'GMC'
            }
        }],
        isPending: false,
        err: ""
    })
})

// TESTING FOR FAILED REQUEST
it('should handle failed action', () => {
    expect(rootReducer(initState, {type: Req_users_failed, payload: 'ERROR'})).toEqual({
        users: [],
        isPending: false,
        err: "ERROR"
    })
})