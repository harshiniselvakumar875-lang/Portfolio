import {useState,useEffect,React} from 'react'
import axios from 'axios'

const GetData=()=> {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/c/3cbe-cfec-4584-a92b")
        .then((res)=>{setData(res.data)})
    },[])
  return (
   
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Id</th>
            </tr>
        </thead>
        {data.map((i)=>{
               return(
                <>
             <tbody>
               <tr>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.id}</td>
               </tr>
        </tbody>
                </>
               )
            })}
       
    </table>
    </>
  )
}

export default GetData
