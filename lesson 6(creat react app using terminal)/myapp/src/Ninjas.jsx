import React from 'react';
const Ninjas = (Props) => {

    const {name,age,belt}=Props;
    // console.log(name);
    // console.log(Props.age);
    return(
        <div>
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Belt: { belt }</div>
        </div>
    );
}

export default Ninjas