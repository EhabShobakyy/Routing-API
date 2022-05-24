import React, { Component } from "react";
import {addUser } from "./API/Users";
import UserForm from "../Components/UserForm";

// eslint-disable-next-line import/no-anonymous-default-export
export default class CreateUserPage extends Component{
    
     state = {
         user: {
             name: "",
             email:""
         }
     }
  
 
      addUser = (values) => {
       addUser(values)
         .then(() => {
             alert('Success');
             this.props.history.push('/users')
         });
     }
    render() {
        return <div>
            <h2>User</h2>
            <UserForm values={this.state.user} onSubmit={this.addUser} />
        </div>;
    }
    
}