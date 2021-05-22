import './App.css';
import React,{useState} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

function App() {
  let [ninjas,setNinjas]=useState([
    {name:"Faiz",age:23,belt:"black",id:1},
    {name:"Zaid",age:22,belt:"blue",id:2},
    {name:"Damini",age:23,belt:"black",id:3},
  ]);

  const addNinja =(ninja)=> {
    // setNinjas
    ninja.id=Math.random();
    console.log(ninja);
    setNinjas((preValue)=>{
      return[...preValue,ninja]
    })
    // console.log(ninjas);
  }

  const deleteNinja =(id)=>{
    console.log(id)
    let ninjasNew=ninjas.filter(ninja=>{
      return ninja.id!==id;
    })
    setNinjas(ninjasNew);
  }

  return (
    <div className="App">
      <h1>My first react app</h1>
      <p>Welcome 😄</p>
      {/* <Ninjas
        name="Faiz"
        age="28"
        belt="Black"
      /> */}

      <Ninjas deleteNinja={deleteNinja} ninjas={ninjas}/>
      <AddNinja addNinja={addNinja}/>
    </div>
  );
}

export default App;
