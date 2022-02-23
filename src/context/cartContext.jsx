import React from 'react';
import { createContext, useState } from 'react';
export const carritoContext = createContext();




const cartContext = ({children}) => {

    let nombre = "Gustavo"


    
  return (
    <carritoContext.Provider value = {{nombre}}>
        {children}
    </carritoContext.Provider>
  )
}

export default cartContext