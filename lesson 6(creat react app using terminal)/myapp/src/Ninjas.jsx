import React from 'react';
import './Ninjas.css';
const Ninjas = ({ninjas,deleteNinja}) => {

    // const {name,age,belt}=Props;
    // console.log(name);
    // console.log(Props.age);

    // const {ninjas}=Props;
    // const ninjaList=ninjas.map(ninja=>{
    //     if(ninja.age>22)
    //     {
    //         return(
    //             <div className="ninja" key={ninja.id}>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     }
    // })

    const ninjaList=ninjas.map(ninja=>{
        return(ninja.age>22?(
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ):null);
    })

    return(
        // <div>
        //     <div>Name: { name }</div>
        //     <div>Age: { age }</div>
        //     <div>Belt: { belt }</div>
        // </div>
        <div className="ninja-list">
            {ninjaList}
        </div>
        
    );
}

export default Ninjas