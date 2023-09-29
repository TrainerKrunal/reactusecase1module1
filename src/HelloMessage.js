
import "./App.css"

export default function HelloMessage(props){

        return(
            <div className="App">
                    <h2>Message from {props.name} : {props.message}</h2>
            </div>
        )
}