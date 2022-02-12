import React from 'react'


const Item = ({item}) => {
  return (
    <div>

<h1>{item.title}</h1>
<p>{item.description}</p>
<h4>{item.price}</h4>
<img src={item.pictureUrl} alt="IMG-0061" border="0"></img>
<br></br>
<button>Ver detalle del producto</button>
<p>Stock disponible{item.stock}</p>








    </div>
  )
}

export default Item