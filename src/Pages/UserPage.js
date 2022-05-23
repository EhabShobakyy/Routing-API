import React, { Component } from "react";
import { getUser } from "./API/Users";
import ViewUser  from "../Components/ViewUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default class UsersPage extends Component{
    
     state = {
         user: {}
     }
  
  componentDidMount=() => {
      const userId = this.props.match.params.id;
        getUser(userId)
      .then(response => {
      this.setState({
        user: response.data
      })
     });
  }
    
    render() {
        return <div>
            <h2>User</h2>
            <ViewUser user={this.state.user} />
        </div>;
    }
    
}