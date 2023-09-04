import React from 'react'
import { FaVideo ,FaImage , FaRegFaceSmile } from "react-icons/fa6";

const Create = () => {
  return (
    <div className='create'>
      
<div className="createfirst">

<div className="createfirstimage"><span><img src="/public/images/sarfraz1.jpeg" alt="" /></span></div>

<div className="createfirstinput">
    <input type="text"  className="firstinput" placeholder = "Hello whats on your mind?" />
</div>





</div>





<div className="createsecond">
<span className="createsecondicon">
  <FaVideo/> <span className='text'>Live Video</span>
</span>
<span className="createsecondicon">
  <FaImage/> <span className='text'>Photo / Video</span>
</span>
<span className="createsecondicon">
  <FaRegFaceSmile/> <span className='text'>Feeling</span>
</span>
</div>







    </div>
  )
}

export default Create
