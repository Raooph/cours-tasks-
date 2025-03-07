import React from 'react'
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router'

const Nav = () => {
  const links=[{id:0,to:"/",title:"Home"},{id:1,to:"/about",title:"About"},{id:2,to:"/products",title:"Products"},{id:3,to:"/contact",title:"Contact"}]

  return (
    
       <>
      <div className='bg-sky-950 text-white flex justify-between  p-3 align-center text-xl'>
        <h1 className='text-2xl'>/Logo</h1>
        <div className='flex gap-7'>
        {
          links.map(({id,to,title})=>{
            return  <Link key={id} to={to}>{title}</Link>
          })
        }
        </div>
        <div>
        <SlBasket />
        </div>
      </div>
    </>
    
  )
}

export default Nav
