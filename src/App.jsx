// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

// export default App

import React from 'react';
import Register from './components/Register';
import UserList from './components/UserList';

const App = () => (
  <div>
    <h1>MERN App</h1>
    <Register />
    <UserList />
  </div>
);

export default App;
