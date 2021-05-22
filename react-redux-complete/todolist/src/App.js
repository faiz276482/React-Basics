import React, { useState} from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

function App() {
  let [todos,setTodos] =useState([
    { id:1,content:"buy some milk"},
    { id:2,content:"buy chocolate"},
  ])

  const deleteTodo=(id) =>{
    // console.log(id);
    const todoList=todos.filter(todo =>{
      return(todo.id!==id);
    });
    setTodos(todoList);
  }

  const addTodo=(todo)=>{
    todo.id=Math.random()
    // console.log(todo,todos)
    setTodos((preValue)=>{
      return([...preValue,todo])
    })
  }

  return (
    <div className="tod-app container">
    <h1 className="center blue-text">Todo's</h1>
    <Todos todos={todos} deleteTodo={deleteTodo}/>
    <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
