import { shallow } from  'enzyme';
import Users from './Users';
import React from 'react';

const users = [
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

it('renders withour crashing', () => {
    expect(shallow(<Users users={users}/>)).toMatchSnapshot();
})
// console.log(shallow(<Users users={users}/>)) 