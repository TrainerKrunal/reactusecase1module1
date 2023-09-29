
import { useState,Fragment } from "react";
import "./App.css"

export default function CounterwithHooks(){

          //  variable    update function   hook   default value
    const [counterValue,setNewCounterValue]=useState(0);
    const [firstName,setNewFirstName]=useState("Krunal");

    const handleIncrement=()=>{
        setNewCounterValue(counterValue+1);
    }

    const handleDecrement=()=>{
        setNewCounterValue(counterValue-1)
    }

    const updateFirstName=()=>{
        setNewFirstName("SCB 2023 Singapore!")
    }

    return(
         <div className="App">
            <h3>Counter</h3>
            <Fragment>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={updateFirstName}>Company Name</button>
            </Fragment>
            <Fragment>
                <h4>Counter:{counterValue}</h4>
                <h4>Company Name: {firstName}</h4>
            </Fragment>
        </div>
        
       
    )

}