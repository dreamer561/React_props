import React from "react";

export default function Child(props){
   let {a,firstname}=props;
//    props.testing();
const transferData=()=>{
    props.testing(Math.random())
}
   
    return(
        <div className="App">Child
        {/* <p>A : {pro.a}</p>
        <p>FirstName :{pro.firstname}</p> */}
        <p>A : {a}</p>
        <p>FirstName: {firstname}</p>
        <button onClick={transferData} > Transfer Data</button>
        </div>

    )
}