import React from 'react'
import './StateHandle.css';
import ImageIcon from '@mui/icons-material/Image';
import Img from './picturee.webp'

const Statehandle = () => {
    function message(){
        open('https://en.wikipedia.org/wiki/Bird')
    }
  return (
    <div>
        <span onMouseOver={message}>
            <ImageIcon />
        </span>
    
         <span onClick={message}>
         <center><img src={Img} alt="bird" /></center>
         </span>
            <center><button onClick={message}>Open site</button></center>  
    </div>   
  )
}
export default StateHandle