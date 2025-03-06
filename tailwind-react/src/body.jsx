import React from 'react'

const Body = () => {
  return (
    <div>
    <main>
      <img id="mainImg" src="images/mainImg.png" alt="" />

      <div className='absolute text-center w-[555px] h-[96px] top-[20rem] left-[28rem]   gap-2.5 text-xl font-medium'>
          <h3 className='text-[38px]'>Take the stress </h3>
          <h3 className='text-[38px]'>out of mealtime</h3>
          <p >America's Most Popular Meal Kit</p>
          <button> View our plans</button>
      </div>
    </main>

    <div className="container  ">
      <h2 className=''> Why HelloFresh?</h2>
      <div className="flex m-5 justify-center gap-7 text-center ">
          <div class="feature">
              <img src="images/icon1.png" alt="Chicken Icon"/>
              <h3>No skimpin’ on the chicken!</h3>
              <p>Or steak, or fish, or plant protein.</p>
          </div>
          <div class="feature">
              <img src="images/icon2.png" alt="Calendar Icon"/>
              <h3>No commitment whatsoever</h3>
              <p>Skipping weeks or cancelling is super easy.</p>
          </div>
          <div class="feature">
              <img src="images/icon3.png" alt="Star Icon"/>
              <h3>The most 5-star reviews</h3>
              <p>Our huge recipe selection wows week after week.</p>
          </div>
          <div class="feature">
              <img src="images/icon4.png" alt="Money Icon"/>
              <h3>Fresh and affordable</h3>
              <p>Chef-created deliciousness from $7.49 per meal.</p>
          </div>
      </div>
     <button id='btn1'>Get Started</button>

      <div className='box1 flex'>
              <div><img src="images/home-page-img.png"/>  </div>
              <div className='boxTexts w-[1000px] gap-3 flex flex-col m-3 font-medium text-[20px]' >
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
