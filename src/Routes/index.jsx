import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import NavBar from '../components/Navbar/NavBar';




const Rutas = () => {
  return (
   <BrowserRouter>
    <NavBar />
   <Routes>
     <Route path='/' element= {<ItemListContainer/>}/>
     <Route path='/detailcontainer' element = {<ItemDetailContainer/>}/>
    

   </Routes>
   
   
   </BrowserRouter>
  )
}

export default Rutas