import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberallowed, setNumberAllowed] = useState(false)
  const [symbolallowed, setSymbolAllowed] = useState(false)
  const [password, setPassword] = useState('')

  const passwordRef=useRef(null)

  const generatePassword = useCallback(()=>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberallowed) str +="0123456789"
    if(symbolallowed) str += "!@#$%^&*()_+"

    for(let i=1;i<length;i++){
      const char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length, numberallowed, symbolallowed])


  useEffect(()=>{
    generatePassword()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[length,numberallowed,symbolallowed]) 


  const copyPasswordToClipboard =()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md
    rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly 
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> setLength(e.target.value)}
          name="" 
          id="" 
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={numberallowed}
        onChange={()=>{
          setNumberAllowed((prev)=>!prev)
        }}
        name=""
        id=""
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox" 
        defaultChecked={symbolallowed}
        onChange={()=>{
          setSymbolAllowed((prev)=>!prev)
        }}
        name=""
        id=""
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
  )
}

export default App
