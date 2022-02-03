import React from "react";
import "../styles/ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h1 className="greetings">{greetings}</h1>
    </div>
  );
};

export default ItemListContainer;
