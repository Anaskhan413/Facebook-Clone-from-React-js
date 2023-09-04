import React, { useState } from 'react'


 

const Sidee = () => {
   
   
    const [state , setstate] = useState([


        {id : 1 ,image : "/public/images/image1.jpeg", name : "MERN STACK Development"},
        {id : 2 ,image : "/public/images/furkan 2.jpeg", name : "PHP Developer"},
        {id : 3 ,image : "/public/images/sarfraz1.jpeg", name : " REATCT NATIVE Developer"},
        {id : 4 ,image : "/public/images/image 2.jpeg", name : "FLUTTER Developer"},
        {id : 5 ,image : "/public/images/elom.jpeg", name : "NODE JS Developer"},
        {id : 6 ,image : "/public/images/furkan.jpeg", name : "REACT JS Developer"},
    
        ]);
   
    return (
        <div className='Sidee'>

{state.map( (info) => (


<div className="sidebarlist" key = {info.id}>

<div className="sidebarimage">
    <img src= {info.image} alt="group image" />

</div>
<div className="sidebarname">
       {info.name}
    </div>


</div>

)

)}




        </div>
    )
}

export default Sidee
