import React, { useEffect, useState } from 'react'
import UseBasket from '../Store/Basket'
import Nav from '../Nav';
import { FaTrash } from "react-icons/fa";
import Swal from 'sweetalert2'
const Basket = () => {
  const {basket, changeProductCount,deleteProductsFromBasket }=UseBasket();
  const [basketTotalPrice,setBasketTotalPrice]=useState(0);
  useEffect(()=>{
    let sum=0;
    basket.forEach( ({totalPrice})=> {
      sum+=totalPrice;});
      setBasketTotalPrice(sum);
  },[basket])

  const deleteProducts=(id)=>{
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductsFromBasket(id);
        Swal.fire('Successfully deleted!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Failed to delete', '', 'info')
      }
    })
    
    

  }
  return (
    <>
    <Nav/>
    <div className='text-4xl font-bold mt-5 px-3'>My Basket</div>
    {!basket.length ? (
      <p className='text-red-500 text-2xl'>Basket is empty</p>
    ):(
      <div>
          {basket.map(({id,images,title,price,description,count,totalPrice})=>{
            return (
            <div key={id} className='grid mt-4 grid-cols-[1fr_3fr] gap-16 border-2 border-gray-300 p-2'>
              <div><img src={images[0]} className='w-full h-[350px] object-cover' /></div>
              <div>
              <h2 className='text-black  font-bold text-4xl '>{title}</h2>
            <h2 className='font-medium mt-4 w-6xl text-2xl '>{description}</h2>
            <h2 className='text-red-600 font-medium text-3xl mt-4'>{price} AZN</h2>
           <div className='flex my-9 gap-2 text-3xl font-bold'>
           <button onClick={()=>changeProductCount(id,"-")} className='bg-slate-500  hover:bg-slate-600 text-white cursor-pointer font-bold  rounded-full justify-center items-center w-10 h-10 ' >-</button>
            <div>{count}</div>
            <button onClick={()=>changeProductCount(id,"+")} className='bg-slate-500  hover:bg-slate-600 text-white cursor-pointer font-bold  rounded-full justify-center items-center w-10 h-10 '>+</button>
           </div>
           <div className='flex justify-between items-end'>
           <p className='text-3xl text-red-500 font-bold'>Total Price: {totalPrice} AZN</p>
           <p className='text-3xl text-red-500 cursor-pointer' onClick={()=>deleteProducts(id)}><FaTrash /></p>
           </div>
              </div>

      
            </div>
            );
          })}
      </div>
    )
  }
  <div className='text-4xl font-bold m-3'>Basket Price : {basketTotalPrice} AZN</div>
    </>

  )
}

export default Basket
