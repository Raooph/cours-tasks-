const url="https://dummyjson.com/products";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./search.jsx";
import "./style.css";
import Loader from "./loading.jsx";
const App=()=> {

    const [isLoading,setIsLoading]=useState(true);

  
  const [inpValue,setInpValue]=useState("");
  const [users,SetUsers]=useState([]);
  const [filteredData,setFilteredData]=useState([]);
  useEffect(()=>{
    axios(url).then(({data})=>{
        setIsLoading(false);
        SetUsers(data.products);
        setFilteredData(data.products);
    })
    
  },[])
  

  useEffect(()=>{
    const newData=users.filter(({title})=>title.toLowerCase().includes(inpValue.toLowerCase()));
    setFilteredData(newData);
  },[inpValue])
  
 
if(isLoading) {
  return <Loader />
  
}
 return(
  <div>
    <Search inpValue={inpValue} setInpValue={setInpValue} />
    <div className="container">
    {filteredData?.map(({id,title,thumbnail})=>{
   return  <div><h2 key={id}>{title}</h2>
   <img src={thumbnail}  /></div>
    })}
    </div>
  </div>
);
}

export default App
