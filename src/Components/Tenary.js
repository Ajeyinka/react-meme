import React from "react";

export default function Tenary() {
    const[thingsArray, setThingsArray]=React.useState(["Thing 1" ,"Thing 2"])
     
    function addItems(){
        setThingsArray(prevArray=>[...prevArray,`Thing ${prevArray.length+1}`])
    }
    
    const thingsElement=thingsArray.map(thing=><p>{thing}</p>)
    return (
        <div className="tenary">
            {thingsElement}
            <button onClick={addItems}>Add Item</button>
        </div>

    )
}