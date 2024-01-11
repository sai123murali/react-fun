import { useState } from "react";



function Handle(){

    const[count,setCount]=useState(0);

    function handleClick(){
        setCount(count+1);
        /*alert("yada yada yada ")*/
    }


    return(
        <>
   <button onClick={handleClick}>
    This man clicked {count} times
    </button>
    
    </>
    );
    
    
}


export default Handle