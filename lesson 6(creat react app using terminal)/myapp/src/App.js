import './App.css';
import React,{useState} from 'react';
import Ninjas from './Ninjas';

function App() {
  let [ninjas,setNinjas]=useState([
    {name:"Faiz",age:23,belt:"black",id:1},
    {name:"Zaid",age:22,belt:"blue",id:2},
    {name:"Damini",age:23,belt:"black",id:3},
  ]);


  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome 😄</p>
      {/* <Ninjas
        name="Faiz"
        age="28"
        belt="Black"
      /> */}

      <Ninjas ninjas={ninjas}/>
    </div>
  );
}

export default App;
