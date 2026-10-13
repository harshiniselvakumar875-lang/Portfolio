import {useState, useEffect,React} from 'react'

const Counter=()=> {
    const[count,setcount]=useState(0)
    const btn={
        padding:"10px",
        borderRadius:"10px",
        backgroundColor:"blue",
        color:"white",
        border:"none",
        margin:"5px",
        cursor:"pointer"
    }
    //without dependencies
    useEffect(()=>{
        document.title="counter";
        console.log("Ueseffect rendered");
    })
    // with dependencies
    useEffect(()=>{
        console.log("counter button is pressed");
    },[])
    //with value dependencies
    useEffect(()=>{
        console.log("Everytime");
    },[count])
    function timeout(){
        setTimeout(()=>{
            console.log("test")
        },1000)
    }

  return (
    
    <div style={{textAlign:"center"}}>
        <h1>Count:{count}</h1>
    {/* <h1>Count</h1> */}
    <button style={btn}onClick={()=>setcount(count+1)}>Increment</button>
    <button style={btn}onClick={()=>setcount(count-1)}>Decrement</button>
    <button styel={btn}onClick={()=>setcount(0)}>Reset</button>
    <button style={btn} onClick={(timeout)}>Timeout

        
    </button>


    </div>
  )
}

export default Counter