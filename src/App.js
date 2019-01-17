import React, { Component } from 'react';
import Users from './components/Users';
import { connect} from 'react-redux';
import { requestUsers } from './redux/actions';
// import { isPending } from 'q';

class App extends Component {
  // state = {
  //   users:[]
  // }

  fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({users}))
    .catch(err => console.log(err));
  }

  componentDidMount(){
    // console.log(this.props.store.getState());
    // this.fetchUsers();
    this.props.onrequestUsers()
  }
  render() {
    const { users, isPending } = this.props;
    return isPending ? <h1>Loading...</h1>
    : (
      <div className="App container">
        <h2 className="mt-5">Repository of Users</h2>
        <Users users={users} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isPending: state.isPending,
    err: state.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onrequestUsers: () => dispatch(requestUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
