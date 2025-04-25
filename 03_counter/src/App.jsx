import { useState } from "react";
function App() {
    // let counter = 0;
    const[counter,setCounter] = useState(0)
    return(
        <div>
            <h3>{counter}</h3>
            <button onClick={()=>{
                setCounter(counter+1)
            }} >++</button>
            <button onClick={()=>{
                if(counter>=1){
                    setCounter(counter-1)
                }
            }} >--</button>
        </div>
    )
}

export default App
