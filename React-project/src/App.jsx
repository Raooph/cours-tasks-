import { Link, NavLink } from "react-router-dom"
import "./index.css"
import Routers from "./componets/Routers";
function App() {

  const links=[{id:0,to:"/",title:"Home"},{id:1,to:"/about",title:"About"},{id:2,to:"/users",title:"Users"}];

  return(

    <div>
         <nav>
      
      <Link><h2>Logo</h2></Link>
     
<div className="pages">

      {links.map(({id,to,title})=>{
        return  (
          <div>
            <NavLink id="pageLinks" to={to} key={id}>{title}</NavLink>
          </div>
        )

      })}
    </div>
  </nav>
    <Routers/>
    </div>
    
  )

}

export default App
