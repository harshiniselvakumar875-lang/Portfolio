import {React,useState} from 'react';
import'./Accordian.css';
const Accordian=()=>{
    const [open,setopen]=useState(null) //for accordian
    function expand(){
        setopen(!open);
    }
    const accor=[
        { id:1,title:"accordian1",para:"paragraph1"},
        { id:2,title:"accordian2",para:"paragraph2"},
        
    ]
    function handleId(id){
  console.log(id);
  setopen(open===id?null:id);
    }
    return(
        <>
        {/* <p className="head" onClick={expand}>Accordian1 </p>
        {open?
        <p>There is an new accordian family</p>
         :""}
        <p className='head'>Accordian2</p>
        <p>There is an new accordian font family</p> */}
        {
            accor.map((res)=>{
                return(
                    <>
                    <p className='head' onClick={()=>handleId(res.id)}>{res.title}</p>
                    {res.id}
                    {open==res.id ? <p>{res.para}</p>:""}
                    </>

                )
            })
        }
        </>
    )

}
export default Accordian