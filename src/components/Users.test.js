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

it('renders without crashing', () => {
    expect(shallow(<Users users={users}/>)).toMatchSnapshot();
})
           
it('Check if user component renders only once', () => {
    expect(shallow(<Users users={users}/>).length).toEqual(1);
})
// console.log(shallow(<Users users={users}/>)) 
