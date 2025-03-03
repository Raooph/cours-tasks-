import React from 'react'
import { Routes,Route } from 'react-router'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Users from '../pages/Users.jsx'
import "../notFound.css"
const Routers = () => {
    const routs=[{id:0,path:"/",element:<Home/>},
        {id:1,path:"/about",element:<About/>},
        {id:2,path:"/users",element:<Users/>},
        {id:3,path:"/*",element: <div class="container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>We're sorry, but the page you were looking for doesn't exist.</p>
            <a href="/">Go back to Home</a>

        </div>}];
    return ( <div>
      <Routes>
       { routs.map(({id,path,element})=>{
            return  <Route path={path} element={element} key={id}/>
        })}
       
      </Routes>
    </div>
  )
}

export default Routers
