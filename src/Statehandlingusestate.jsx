//import React, { useState } from 'react'

//const Statehandlingusestate = () => {

 //  const[like,setlike]=useState(0)

  //  function increment(){
 //      setlike(like + 1 )
 //   }
 //   function decrement(){
 //       if (like > 0){
  //      setlike(like - 1)
 //       }
 //   }
//  return (
 //   <div>
  //        <center><p>{like}</p></center>
  //       <center><button onClick={increment}>Like</button>
  //        <button onClick={decrement}>DisLike</button></center>
 //   </div>
 // )
//}
//export default Statehandlingusestate
//export default Statehandlingstate
//import React, { useState } from 'react'

//const Statehandlingusestate = () => {
 //   const[like,setLike]=useState("hi")
 //   function para(){
//        setLike("Mensuba")
//    }
 //   function old(){
 //       setLike("welcome")
 /*   }
    
  return (
    <div onMouseEnter={para} onMouseLeave={old}>
    
    <center><p>{like}</p></center>
 //   </div>
//  )
//}

//export default Statehandlingusestate*/
import React, { useState } from 'react'
import Img from './picturee.webp'
import Luffy from './bird-8788491_1280.webp'
const Statehandlingusestate = () => {
    
    const[image,setImage]=useState(Img)
       const para=function(){
           setImage(Luffy)
       }  
  return (
    <div>
        <img src={image} alt="bird" onMouseEnter={para} />
    </div>
  )
}

export default Statehandlingusestate