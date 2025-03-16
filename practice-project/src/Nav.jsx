import React from 'react'
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router'
import UseBasket from './Store/Basket';
const Nav = ({searchedText,setSearchedText}) => {
  
  const links=[{id:0,to:"/",title:"Home"},{id:1,to:"/about",title:"About"},{id:2,to:"/products",title:"Products"},{id:3,to:"/contact",title:"Contact"}]
  const {basket}=UseBasket();
  
  return (

       <>
      <div className='bg-sky-950 text-white flex justify-between  p-3 align-center text-xl'>
        <h1 className='text-2xl '>/Logo</h1>
        <div className='flex justify-center items-center text-xl gap-7'>
        {
          links.map(({id,to,title})=>{
            return  <Link key={id} to={to}>{title}</Link>
          })
        }
        </div>

       <div className='hidden md:flex gap-10 items-center'>
        <input value={searchedText} onChange={(e)=>setSearchedText(e.target.value)} type="text" placeholder='search' className='border outline-0 px-2 py-1 rounded-2xl placeholder:text-xl placeholder:text-white text-xl p-5' />
       <Link to="/basket" className='relative' >
        <SlBasket className='text-2xl '/>
        <span className='absolute top-[-10px] left-[-16px] text-[16px] bg-red-400 text-white w-5 h-5 flex justify-center  items-center rounded-full'>{basket.length}</span>
        </Link>
       </div>
      </div>
    </>
    
  )
}

export default Nav
