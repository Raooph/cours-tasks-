import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Nav from '../Nav.jsx';
import axios from 'axios';
import Loader from '../Loader.jsx';
import UseBasket from '../Store/Basket.js';

const ProductDetailed = () => {
  const {slug}=useParams();
  const url=import.meta.env.VITE_BACKEND_KEY;
  const [showProducts,setShowProducts]=useState({});
  const [currentImage,setCurrentImage]=useState("");
  const [product,setProduct]=useState({});
  const [isLoading,setIsLoading]=useState(true);
  const [isAdded,setIsAdded]=useState(false);
  const {basket,addNewProduct}=UseBasket();
    useEffect(()=>{
      axios.get(url).then(({data})=>{
        const currentElement=data.find((e)=>e.slug === slug);
        setProduct(currentElement);
        setIsLoading(false)
        setShowProducts(currentElement);
        setCurrentImage(currentElement.images[0]);
      basket.forEach(({id}) => {
          currentElement.id === id && setIsAdded(true);
        });
      });
    },[]);


    
    if(isLoading){
      return <Loader/>
    }
    const addBasket=()=>{
      const data={...product,count:1,totalPrice: product.price};
      addNewProduct(data);
      setIsAdded(true);
    }
  return (
    <div>
      <Nav/>
      <div className='grid grid-cols-2 px-5 gap-16 mt-4'>
        <div className='border-2 border-gray-300 p-6 grid grid-cols-[1fr_120px] gap-5'>
          <img src={currentImage} className='h-[500px] w-[550px] ' />
          <div className='grid grid-cols-[115px] grid-rows-[100px_100px_100px] object-cover gap-5 justify-between'>
              {
              showProducts.images?.map((image,id)=>{ 
               { 
                return <img key={id} src={image} className='w-full h-full cursor-pointer' onClick={()=>{
                  setCurrentImage(image);
                }} /> ;
              }
               
                })}
          </div>
        </div>
        <div>
          <h2 className='text-black font-medium text-4xl '>{showProducts.title}</h2>
          <h2 className='font-medium mt-3'>{showProducts.description}</h2>
          <h2 className='text-red-600 font-bold text-2xl mt-2'>{showProducts.price} AZN</h2>
          <h2>{showProducts.category?.price}</h2>
          <button onClick={addBasket} className={`' mt-6 py-3 px-2 text-white cursor-pointer rounded-xl ' ${isAdded ? "bg-red-600 ":  "bg-green-600" }`}>{isAdded ? "Added" :  "Add to basket" }</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailed
