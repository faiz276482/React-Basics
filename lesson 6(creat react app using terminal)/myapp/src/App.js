import './App.css';
import React from 'react';
import Ninjas from './Ninjas';

function App() {
  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome 😄</p>
      <Ninjas
        name="Faiz"
        age="28"
        belt="Black"
      />
    </div>
  );
}

export default App;
