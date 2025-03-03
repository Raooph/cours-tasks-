import React from 'react'
import "./css/card.css"
const Cards = () => {
  return (
   <div className='CardsImg'>
    <h3>Cook it. Love it. Tag it #HelloFreshPics</h3>
    <p>Follow us on Instagram @hellofresh</p>
     <div className='cardContainer'>
      <div className='card'>
        <img src="images-icons/first.png"/>
        <h4>bdanielle1285</h4>
        <p>My little chef helping me make dinner tonight and trying out some of his new kitchen utensils I got him!</p>
      </div>
      <div className='card'>
        <img src="images-icons/second.png"/>
        <h4>lilpepthekelpie</h4>
        <p>I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
      </div>
      <div className='card'>
        <img src="images-icons/third.png"/>
        <h4>mandi14eid</h4>
        <p>Drew and the kids made mom dinner tonight! Drew and I had our doubts but WOW was it tasty!</p>
      </div>
      <div className='card'>
        <img src="images-icons/fourth.png"/>
        <h4>our_lovely_stride</h4>
        <p>We had a cooking class yesterday and we had such an amazing time. 😁 They had such a great time working as a team and I can’t wait for our weekly cooking class 🙌🏻😁</p>
      </div>
    </div>
   </div>
  )
}

export default Cards
