Fiaro
Indumentaria deportiva femenina


Descripción
E-commerce creado en el curso de React de Coderhouse. Se trata de un sitio de venta de indumentaria deportiva femenina


Construido con 🛠️
React - Biblioteca de JavaScript utilizada.

Node Js - Entorno de desarrollo.

NPM - Sistema de gestión de paquetes.

Dependencias utilizadas
React-bootstrap

Firebase

react-router-dom

Versionado 📌
Usé GitHub para el versionado.



Estructura de la tienda
Header
El header es fijo para facilitar la navegación, contiene:

Logo: se muestra fijo en el header y su vinculo lleva al home(route:'/') Un navBar con los siguientes vínculos:
Productos: muestra las diferentes categorías de los productos.

Body
Es el lugar donde se despliega el contenido de las diferentes secciones. Su ruta es ' / ' y muestra el catálogo completo de la tienda.


Navegación
El contenido que se muestra por default es la tienda con el catálogo completo (al cual también se puede acceder por los métodos mencionados anteriormente).

Menú de categorías
El catálogo muestra en su parte superior, un menú de navegación para filtrar los productos (ítems) por categorías.

Ítem
Cada producto se presenta en un bloque que contiene: título, imagen y precio. Se puede acceder al detalle del ítem al clickear el título o la imagen.

Detalle del ítem
En esta sección se filtra el catálogo por el id del producto que se desea ver. Se muestra: imagen en un mayor tamaño, título, descripción, precio, stock disponible, botones para seleccionar cantidad y botón para agregar al carrito.

Carrito
Esta sección esta dividida en 2 bloques: el detalle y el total con los botones para finalizar compra.

El detalle incluye: título, precio, cantidad, subtotal y un botón "borrar" para eliminar el ítem del carrito. El otro bloque muestra el total de la compra, junto con 2 botones: "Confirmar compra" y "Vaciar carrito".

Formulario de compra y modal de compra realizada
En el formulario se presentan los campos para que el usuario ingrese sus datos personales. Si el ingreso de todos los datos es correcto, se muestra un modal con el Número de orden.

Autor ✒️
Gustavo Marin
