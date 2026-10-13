import {useState,React} from 'react'
import './Modalbox.css';
import image from'./vpn.jpeg'

function ModalBox() {
    const[modal,setmodal]=useState(false)
  return (
    
    <>
<div className='name'>ModalBox</div>
{modal ? <div className='modal'>
        <span>Are u sure to confirm it?</span><br/>
         <button onClick={()=>setmodal(false)}>Ok</button>
</div>:""
}
    <button onClick={()=>setmodal(true)}>Confirm</button>
   

   {/* //overlay */}
   <div className='overlay'>
    <button className='xButton'>X</button>
    <img src={image}/>
    <h1>Secure all your  devices</h1>
    <p>Ensure your mobile phone,laptops and other<br/>
    devices are protected online</p>
    <button className='premium'>Premium purchase</button>
   </div>

    </>

  )
}

export default ModalBox