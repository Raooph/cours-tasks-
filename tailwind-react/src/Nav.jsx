import React, { useState } from 'react'

const Nav = () => {
    const [isOpen,setIsOpen]=useState(false);
    const a=[{id:0 ,dropdownText:"Dropdown1"},{id:1 ,dropdownText:"Dropdown2"},{id:2 ,dropdownText:"Dropdown3"},{id:3 ,dropdownText:"Dropdown4"}];
  return (
        <div>
      <nav className='flex justify-between m-5 p-3 text-xl '>
        <div className='flex  gap-5 font-medium'>
        <div><img  src="images/Hello_Fresh_Lockup.png.png" alt="appleLogo" /></div>
            <h2>Our Plans</h2>
            <h2>How It Works</h2>
            <ul >
          <li onMouseEnter={()=>setIsOpen(true)}    
         
          className='cursor-pointer  hover:text-green-700 '>
            <h2 >Our Menus</h2></li>
          <ul 
           onMouseLeave={()=>setIsOpen(false)}
          className={` z-10 absolute ${isOpen ? "block" :"hidden"}`}>
             {
                a.map(({id,dropdownText})=>{
                    return <li className=' cursor-pointer hover:text-emerald-700' key={id}>{dropdownText}</li>
                })
            }
          </ul>
        </ul>
            <h2>Gift Cards</h2>
            <h2>Sustainability</h2>
            <h2>Thanksgiving Box</h2>
        </div>
        <button className='font-medium '>Log in</button>
      </nav>

    </div>
  
  )
}

export default Nav
