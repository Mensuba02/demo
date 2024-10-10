import React from 'react';
import './Header.css';
import Img from './picturee.webp';

const Header = () => {
  return (
    <div className="first">
      <center><h1>INSTAGRAM</h1></center>
     
      <center><img src={Img}  alt="image"></img></center>
      <hr />
      <i className="sec"><dd>Birds are warm-blooded vertebrates with feathers, wings, and beaks. They are found worldwide, from deserts to rainforests, and vary in size from tiny hummingbirds to large ostriches. Birds have hollow bones to reduce body</dd>weight, enabling flight for many species, though some, like penguins and ostriches, are flightless. They lay hard-shelled eggs, and most exhibit complex nesting behaviors. Birds communicate through songs and calls, often for mating or marking territory. They play a vital role in ecosystems by pollinating plants, dispersing seeds, and controlling insect populations. Birds have evolved to have keen eyesight, aiding in hunting and navigation.</i>
      <hr></hr>
      <center><iframe width="220" height="100" src="https://www.youtube.com/embed/y2lq4IGD7sY?si=5mjwZV49di1APIf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></center>
      <hr></hr>
      
      <center><a href="https://en.wikipedia.org/wiki/Bird">Birds</a></center>
     
      <center><mark><p>Pn.no:936061452</p></mark></center>
      <center><mark><p>Gmail:mensubaus.22ece@kongu.edu</p></mark></center>

      </div>
  )
}

export default Header;