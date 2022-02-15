import React from "react";
import "../styles/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

const ItemDetail = ({ item }) => {
  return (
    <div>
      
        
        <div className="container-detail">
            <img
              className="img-item"
              src={item.pictureUrl}
              alt="IMG-0061"
            ></img>
            

            
    
         
     
        <div className="container-text">
            <p>{item.title}</p>
            <h1>{item.description}</h1>
           
            <h4>{item.descriptionDetail}</h4>
           

            <select value="Seleccione un talle">
              {" "}
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            

            <h3>Precio:{item.price}$ </h3>
            <br></br>
            <p>
              {item.origen}
              <FontAwesomeIcon className="receipt" icon={faReceipt} />{" "}
            </p>
            <button className="btn-detail">Agregar al carrito</button>
            </div>
            </div>
            
            
   
        
       
     
    </div>
  );
};

export default ItemDetail;
