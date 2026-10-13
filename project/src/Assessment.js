import {React,useState,useEffect} from 'react'
import './Assessment.css'

function Assessment() {
    const [dark,setDark]=useState(true)

    const value=()=>{
      setDark(!dark)
    }
    const[age,setAge]=useState(0)
    const calculate=()=>{
        setAge(2026-1997)
    }
    
  return (
    <div className={dark ? "app":"app1"}>
        <h1>Theme Changer</h1>
        <button onClick={value}>{dark?"Light Mode ☀️":"Dark Mode🌙"}</button>

        <h1>Age Calculator</h1>
        <button onClick={calculate}>Calculate</button>
        <p>{age}</p>
        <h1>Random Number Generator</h1>
        {/* <button onClick={random}>Random Number</button> */}
    </div>
  )
}

export default Assessment