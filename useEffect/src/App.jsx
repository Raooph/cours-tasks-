const url="https://jsonplaceholder.typicode.com/users/";
import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import Search from "./input";
const App =()=>{
  
const [inpValue,setInpValue]=useState("");

const [users,SetUsers]=useState([]);
const [filteredData,setFilteredData]=useState([]);
useEffect(()=>{
  axios(url).then(({data})=>{
      SetUsers(data);
      setFilteredData(data);
  })
},[])

useEffect(()=>{
  const newData=users.filter(({username})=>username.toLowerCase().includes(inpValue.toLowerCase()));
  setFilteredData(newData);
},[inpValue])

return(
  <div>
    <Search inpValue={inpValue} setInpValue={setInpValue} />
    <div className="container">
    {filteredData?.map(({id,username})=>{
   return  <h2 key={id}>{username}</h2>
    })}
    </div>
  </div>
);


}
export default App;

