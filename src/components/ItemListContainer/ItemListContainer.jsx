import React from "react";
import "../styles/ItemListContainer.css";
import ItemCount from "./ItemCount";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1 className="greetings">{greetings}</h1>
      <ItemCount stock ={5} initial = {1}   />
  
    </div>
  );
};

export default ItemListContainer;
