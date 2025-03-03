import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "../index.css"
const Users = () => {
  
    
      const [user,setUser]=useState([]);
      
      
      useEffect(()=>{
      axios("https://jsonplaceholder.typicode.com/users/").then(({data})=>{
          setUser(data)
        })
       },[])
      
    
  return <div>
    {
        user.map(({id,username})=>{
            return <div id='users' >
                 <div key={id}>{username}</div>
            </div>
        })
    }
  </div>
}

export default Users
