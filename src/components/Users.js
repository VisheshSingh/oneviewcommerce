import React from 'react';
import { Table } from 'reactstrap';

const Users = (props) => {
const {users} = props;
let userList = users.map(user => {
    return (
          <tr key={user.id}>
            <th>{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            <td>{user.company.name}</td>
          </tr>
    )
})
  return (
    <Table striped>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
            {userList}
        </tbody>
    </Table>
  )
}

export default Users;
