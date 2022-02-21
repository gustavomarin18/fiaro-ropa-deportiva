import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../components/Navbar/NavBar';
import NotFound from '../components/NotFound/NotFound';




const Rutas = () => {
  return (
   <BrowserRouter>
    <NavBar />
   <Routes>
   <Route path='/*' element={<NotFound />} />
     <Route path='/' element= {<ItemListContainer/>}/>
     <Route path='/detail' element = {<ItemDetailContainer/>}/>
     <Route path='/category/:id' element = {<ItemListContainer/>}/>
     <Route path= '/item/:id' element = {<ItemDetailContainer/>}/>

    


    

   </Routes>
   
   
   </BrowserRouter>
  )
}

export default Rutas