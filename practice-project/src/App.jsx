import './App.css'
import Home from './pages/Home'
import NotFound from './NotFound'
import Basket from './pages/Basket'
import { Route,Routes } from 'react-router'
import ProductDetailed from './pages/Products'


const App=()=> {
  const routes=[
    {id:0,path:"/",element: <Home/>},
    {id:1,path:"/products/:slug",element: <ProductDetailed/>},
    {id:2,path:"/basket",element: <Basket/> },
  ];

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
