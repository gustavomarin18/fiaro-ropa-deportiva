import React from "react";
import "../styles/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../ItemListContainer/ItemCount";
import { Card,Button } from "react-bootstrap";
const ItemDetail = ({ item }) => {
  return (

<>
    <Card className="cardContainer" style={{ width: '25rem' }}>
    <Card.Img variant="top" src={item.pictureUrl} />
    <Card.Body>
       <Card.Title>{item.title}</Card.Title>
    <Card.Text>
    {item.description}
    </Card.Text>
    <Card.Text>
    {item.descriptionDetail}
    </Card.Text>
    <Card.Text>
    Precio:{item.price}$
    </Card.Text>
   
    <Card.Text>
    Stock:{item.stock}
    </Card.Text>
    {item.origen}
            <FontAwesomeIcon className="receipt" icon={faReceipt} />
            <Card.Text>
            <ItemCount item={item} stock={item.stock} initial={1} />

    </Card.Text>
   
    </Card.Body>
    </Card>






         
   

    
</>
  );
};

export default ItemDetail;



















{/*import React from "react";
import "../styles/ItemDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import ItemCount from "../ItemListContainer/ItemCount";
const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="container-detail">
        <img className="img-item" src={item.pictureUrl} alt="IMG-0061"></img>

        <div className="container-text">
          <p className="item-title">{item.title}</p>
          <h1>{item.description}</h1>

          <h4>{item.descriptionDetail}</h4>

     

          <h3>Precio:{item.price}$ </h3>
          <h3>Stock:{item.stock}</h3>


          <br></br>
          <p>
            {item.origen}
            <FontAwesomeIcon className="receipt" icon={faReceipt} />{" "}
          </p>
          <ItemCount item={item} stock={item.stock} initial={1} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;*/}


