
import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route } from 'react-router-dom'
import './App.css'
import Movie from './component/Movie/Movie'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import TvShow from './component/TvShow/TvShow'
import Pricing from './component/Pricing/Pricing'
import Blog from './component/Blog/Blog'
import Contacts from './component/Contacts/Contacts'


const routes= createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Movie/>}/>
      <Route path="/tvshow" element={<TvShow/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
    </Route>
    
  )
)


const App = () =>{
  
  return (
    <RouterProvider router={routes}/>
    
     
   
  )
}

export default App
