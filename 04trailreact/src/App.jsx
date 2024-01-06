import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Squarecards from './components/squarecards'

function App() {

  return (
    <>
    <div className='text-3xl bg-green-500 p-3 rounded-md'>squarecards</div>
      <Squarecards imgurl="https://i.etsystatic.com/23821301/r/il/fe4ec7/3179540047/il_570xN.3179540047_652j.jpg"/>
      <Squarecards username = "Muralidhar"/>
      
    </>
  )  
}

export default App       
