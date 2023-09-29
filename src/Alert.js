
import "./App.css"
import { Button } from "@material-ui/core";
import { Save } from "@material-ui/icons";

export default function Alert(){

    const showAlert=()=>{
        alert("React is very fast")
    }

    let name="krunal";
    //let age=Math.floor(Math.random()*30)

    return(
        <div className="App">
            <h1>My name is {name} and my age is {Math.floor(Math.random() * 30)}</h1>
            <button type="button"  onClick={showAlert}>Save</button>
            <Button type="Submit"
                variant="contained" 
                onClick={showAlert} 
                color="secondary"
                startIcon={<Save/>}  
                style={{
                    fontSize:20
                }}>Submit</Button>
        </div>
    )
}