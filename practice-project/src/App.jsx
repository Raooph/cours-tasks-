import ProductDetailed from './pages/Products'
import Home from './pages/Home'
import { Route,Routes } from 'react-router'
import './App.css'
import NotFound from './NotFound'

const App=()=> {
  const routes=[{id:0,path:"/",element:<Home/>},{id:1,path:"/products/:slug",element:<ProductDetailed/>}]

  return(
    <>
     <Routes>
            {
                routes.map(({id,path,element})=>{
                    return <Route key={id} path={path} element={element} />
                })
            }
            <Route path='*' element={<NotFound/>}/>
       </Routes>

    </>
  )
}

export default App
