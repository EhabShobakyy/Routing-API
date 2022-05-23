import React, { Component } from "react";
import { getUser,updateUser } from "./API/Users";
import UserForm  from "../Components/UserForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default class EditUserPage extends Component{
    
     state = {
         user: {
             name: "",
             email:""
         }
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
      updateUser = (values) => {
       const id = this.state.user.id;
       updateUser(id, values)
         .then(() => {
             alert('Success');
             this.props.history.push('/users')
         });
     }
    render() {
        return <div>
            <h2>User</h2>
            <UserForm values={this.state.user} onSubmit={this.updateUser} />
        </div>;
    }
    
}