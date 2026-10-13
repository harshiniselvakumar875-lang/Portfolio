import {React,useState} from "react";

function Header(){

    const[Status,setStatus]=useState("")
    const Ctime=new Date().toLocaleTimeString();
    console.log(Ctime);
    if(Ctime >="04:05:00pm"&& Status!="skyblue"){
        console.log("system is offline")
    setStatus("skyblue");
    
    //     return(
    //         setStatus("online")
    //     )
     }
    return(
            <>
            <div style={{width:"100%",height:"100vh",backgroundColor:Status}}>
                 HEADER
            <p>{Ctime}</p>
            <p>{Status}</p>
           <button disabled={Status=="skyblue"?true:false}>TEST</button>
            </div>
            </>
        )
    }
export default Header;