import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "./API/Users";
// eslint-disable-next-line import/no-anonymous-default-export
export default class UsersPage extends Component{
    
     state = {
         users: []
     }
  
  componentDidMount=() => {
    getUsers()
      .then(response => {
      this.setState({
        users: response.data
      })
     });
    }
    
    render() {
        return <div>
            <h2>Users</h2>
             <ul>
          {this.state.users.map(user => 
            <li key={user.id}>
              {user.name} {' '}
              <Link to={"/users/" + user.id}>View</Link>
              <Link to={"/users/edit/" + user.id}>Edit</Link>

              </li>
          )}
        </ul>
        </div>;
    }
    
}