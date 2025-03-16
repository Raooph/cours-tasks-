import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Loader from './Loader';
const url=import.meta.env.VITE_BACKEND_KEY;
const Body = ({searchedText}) => {
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [filteredProducts,setFilteredProducts]=useState([]);
  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setProducts(data);
      setFilteredProducts(data);
      setIsLoading(false);
    })
  },[])
  useEffect(()=>{
    let filteredData=products.filter(({title})=>{
      return title.toLowerCase().includes(searchedText.toLowerCase());
    })
    setFilteredProducts(filteredData);
  },[searchedText]);
  
  if(isLoading){
    return <Loader/>
  }
  return (
    <>
    <div className='m-6'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6'>
     {
      
        filteredProducts.map(({id,price,title,images,category,description,slug})=>{
          return <div className='border-1 border-gray-300 relative rounded-md' key={id}>
            <img className='object-cover w-full h-[250px] rounded-tl-md rounded-tr-md' src={images}  />
           <div className='p-2'>
            <h2 className=' truncate font-bold'>{title}</h2>
            <h2 className=' truncate absolute top-2 right-2 bg-red-300 px-2 py-0.5 text-sm rounded-md'>{category.name}</h2>
            <h2 className='my-2 line-clamp-2'>{description}</h2>
            <h2 className=' font-bold text-2xl text-red-700'>{price} AZN</h2>
           </div>
          <Link to={"products/"+slug}  className="absolute inset-0"></Link>
          </div>
        })
      }
     </div>
    </div>
    </>
  )
}

export default Body
