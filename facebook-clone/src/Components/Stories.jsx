import React from 'react'

const Stories = () => {
    const [state , setstate] = React.useState([


        {id : 1 ,image : "/public/images/image1.jpeg", name : "MERN STACK Development"},
        {id : 2 ,image : "/public/images/furkan 2.jpeg", name : "PHP Developer"},
        {id : 3 ,image : "/public/images/sarfraz1.jpeg", name : " REATCT NATIVE Developer"},
        {id : 4 ,image : "/public/images/image 2.jpeg", name : "FLUTTER Developer"},

    
        ]);
  
    return (
        <div className='stories'>
 {state.map(story => (
               <div className="storiescol" key={story.id}>
               <div className="storiesbody"><img src= {story.image} alt="" />
                   <section className="storiesbodyoverlay">
                       <span className='username'> {story.name}</span>

                       <main className="storiesbodyoverlayimage">
                           <img src= {story.image} alt="" />
                       </main>


                   </section>

               </div>


           </div>
 ))}




        </div>
    )
}

export default Stories
