import React from "react";
import "../styles/ItemListContainer.css";

import ItemList from "./ItemList";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1 className="greetings">{greetings}</h1>

      <ItemList />
    </div>
  );
};

export default ItemListContainer;
