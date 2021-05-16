import React,{useState} from 'react'

export default function AddNinja(props) {
    let [ninja,setNinja]=useState({
        name:"",
        age:0,
        belt:"",
    });

    const handleChange=(e)=>{
        const { name, value } = e.target;
        setNinja((preValue)=>{
           return{
                ...preValue,
                [name]:value,
                }
            
        })
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        props.addNinja(ninja)
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="name">Name:
                    <input type="text" name="name" placeholder="Enetr name" onChange={handleChange}></input>
                </label>
                <label htmlFor="age">Age:
                    <input type="text" name="age" placeholder="Enetr age" onChange={handleChange}></input>
                </label>
                <label htmlFor="belt">Belt:
                    <input type="text" name="belt" placeholder="Enetr belt" onChange={handleChange}></input>
                </label>
                <button type="submit">Submit</button>
            </form>            
        </div>
    )
}
