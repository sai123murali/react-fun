import {useState} from 'react'

function Handleseperate() {


    const [counting,setCounting]=useState(0);

    function HandlingClick(){
        setCounting(counting+1)

    }



  return (
    <>
    <button
    onClick={HandlingClick}
    >
        Updating when clicked {counting} state hook 
    </button>
    <button
    onClick={HandlingClick}
    >
        Updating when clicked {counting} state hook 
    </button>
    </>
  )
}

export default Handleseperate