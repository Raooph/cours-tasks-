import React from 'react'
import "./css/bodyCss.css"
const Body = () => {
  return (
    <div>
      <main>
        <img id="mainImg" src="images-icons/mainImg.png" alt="" />

        <div className='mainText'>
            <h3>Take the stress </h3>
            <h3>out of mealtime</h3>
            <p id='p2'>America's Most Popular Meal Kit</p>
            <button id='button2'> View our plans</button>
        </div>
      </main>

      <div class="container">
        <h2>Why HelloFresh?</h2>
        <div class="features">
            <div class="feature">
                <img src="images-icons/icon1.png" alt="Chicken Icon"/>
                <h3>No skimpin’ on the chicken!</h3>
                <p>Or steak, or fish, or plant protein.</p>
            </div>
            <div class="feature">
                <img src="images-icons/icon2.png" alt="Calendar Icon"/>
                <h3>No commitment whatsoever</h3>
                <p>Skipping weeks or cancelling is super easy.</p>
            </div>
            <div class="feature">
                <img src="images-icons/icon3.png" alt="Star Icon"/>
                <h3>The most 5-star reviews</h3>
                <p>Our huge recipe selection wows week after week.</p>
            </div>
            <div class="feature">
                <img src="images-icons/icon4.png" alt="Money Icon"/>
                <h3>Fresh and affordable</h3>
                <p>Chef-created deliciousness from $7.49 per meal.</p>
            </div>
       <button id='btn1'>Get Started</button>
        </div>

        <div className='box1'>
                <div><img src="images-icons/home-page-img.png"/>  </div>
                <div className='boxTexts' >
                    <h3>What's inside each box? </h3>
                    <a>✅Easy-to-follow recipes with clear nutritional info</a>
                    <a>✅High quality ingredients sorced straight from the farm</a>
                    <a>✅Convenient meal kits that fit perfectly in the fridge </a>
                    <a>✅A fun cooking experience that makes you feel unstoppable</a>
                    <a>✅Innovative packaging designed to reduce waste </a>
                    <button id='btn2'>View our plans</button>
                </div> 
        </div>

    </div>
   </div>

  )
}

export default Body
