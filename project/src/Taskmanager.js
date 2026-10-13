// import {React,useState} from "react";

// const Taskmanager=()=>{
//     const[status,setstatus]=useState("");
//     return(
//         <div style={{backgroundColor:'skyblue',height:"100vh"}}>
//         <h1>Task Manager</h1>
//         </div>
//     )
// }
// export default Taskmanager
import {React,useState} from "react";

const Taskmanager=()=>{
    const[status,setstatus]=useState();
    // const getdate =()=>{
    //     status="Harshu";
    //      console.log(status);
    // }
    function getdata(){
        setstatus(!status)
    }
   

    return(
        <div style={{backgroundColor:status?"skyblue":"white",height:"100vh"}}>
           <h1>Task manager</h1>
           <span style={{cursor:"crosshair"}} onClick={getdata}>{status?"☀︎" :"⏾"}</span>
        {/* // <form>
        //     <input onChange={data}></input>
        // </form>
            // <p>status:{status}</p>
            // <button onClick={getdate}>Setstatus</button> */}
        </div>
    )
}
export default Taskmanager