// Ract is a js library, React is not a framework
// Developed by Facebook
// A react application is made components
// Reactjs application is made up of diff components, and each components have have its own logic and controls
// JSX - stands for JavaScript XML
// ES6
// States and Prop
// async and await
// how to fetch and display data

// create a folder
// 1. open cmd
// 2. Create React App
// 3. Create a new React <React Project>
// 4. npm install -g create-react-app

//Alt
// 1. Create a folder
// 2. open it any code editor
// 3. npm install
// 4. npm start

import React, { useState } from 'react';
import "./styles.css";

const App=()=>{
 const [users, setUsers] = useState([]);
 const loadUsers= async()=>{
   console.log('before');
   const response= await fetch ("https://api.github.com/users");
   const jsonResponse = await response.json();
   setUsers(jsonResponse);
 };

  return (
    <div className="App" >
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>

      <h2>Users:</h2>
  <ul>
    {users.map(({id,login, avatar_url })=>(
      <li key={id}>Name: {login} Avator: {avatar_url} </li>
    ))}
  </ul>

    </div>
  )
}

export default App;
