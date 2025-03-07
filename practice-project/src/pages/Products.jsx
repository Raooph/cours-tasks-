import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import Nav from '../Nav.jsx';
import axios from 'axios';

const ProductDetailed = () => {
  const {slug}=useParams();
  const url="http://localhost:5173/products";
    useEffect(()=>{
      axios.get(url).then(({data})=>{
        const currentElement=data.find((e)=>e.slug === slug);
          console.log(currentElement);
      });
    },[]);
   
  return (
    <div>
      <Nav/>
    </div>
  )
}

export default ProductDetailed
