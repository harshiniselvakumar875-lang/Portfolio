// import {React,useState} from "react";
// import './Project.css';
// const Project=()=>{
//     const[status,setstatus]=useState("Your text here")
//     const[email,setemail]=useState("");
//     const[input,setinput]=useState('')
//     const[age,setage]=useState(" ");
//     function inc(){
//         // setstatus(status+10)--increament
//         //    setstatus(!status)
//     }
// //console.log(status);
// // function data(event){
// //     // console.log(event);
// //     // console.log(event.target.value);
// //     setinput(event.target.value);
// // }
// // function register(event){
// //     setinput(event.target.value);
// // }
// // function handleSubmit(event){
// //     event.preventDefault();
// //     alert(input);
// //     alert(email);
// //     alert(age);
// // }
// // function mall(e){
// //     setemail(e.target.value)
// // }
// // function agei(e){
// //     setage(e.target.value)
// //}
// const[value,setvalue]=useState({
//     id:"1",
//     name:"Harshini",
//     age:21,
//     email:"[EMAIL_ADDRESS]"
// })

// function change(event){
//        setvalue({
//         ...value,
//         name:event.target.value
//        })
// }
//      return(
//         <div style={{backgroundColor:status?"skyblue":"black",height:"100vh"}}>
//         {/* <h1>Harshini S</h1>
//      */}
//                 {value.name}
//      <h1>
//         <span style={{cursor:"cell"}} onClick={inc}>{status?"😎" :"🌜"}</span></h1>
//         <form onSubmit={handleSubmit}>
//             Name:<input onChange={register}></input><br/>
//             Email:<input onChange={mall}></input><br/>
//             Age:<input onChange={agei}></input><br/>
//             <button type="submit">Submit</button>
//         </form>
//         </div>
//     )
// }
// export default Project;
