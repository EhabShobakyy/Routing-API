import React from 'react';
import axios from 'axios';
// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function getUsers() {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return response;
}
// to view one User
export async function getUser(id) {

    const response = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
    console.log(response);
    return response;
}



// to delete User from Server

export async function deleteUser(id) {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/'+id);
    return response;
}


// to Update User Data
export async function updateUser(id, values) {
  const response = await axios.put('https://jsonplaceholder.typicode.com/users/' + id, values);
  console.log(response);
    return response;
}

// ADD User
export async function addUser(values) {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users/' ,values);
  console.log(response);
    return response;
}