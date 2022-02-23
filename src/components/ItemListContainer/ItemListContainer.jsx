import React from "react";
import "../styles/ItemListContainer.css";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1 className="greetings">{greetings}</h1>
      {/* <ItemCount stock ={5} initial = {1}   />*/}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
