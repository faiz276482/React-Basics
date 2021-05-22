import React,{useState} from 'react'

export default function AddTodo({addTodo}) {
    let [todo,setTodo]=useState({content:""});

    const handleOnChange=(event)=>{
        setTodo({content:event.target.value});
        
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(todo);
        addTodo(todo);
        setTodo({content:""})
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add new todo</label>
            <input type="text" onChange={handleOnChange} value={todo.content}/>
            {/* <button type="submit">Submit</button> */}
        </form>
    )
}
