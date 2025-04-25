const nombreProducto = prompt("Ingrese el nombre del producto: ");
let precioProducto = 1000;
let cantidadProducto = prompt("Cuantas Unidades De : " + nombreProducto + " desea comprar? ");
let precioTotal = precioProducto * cantidadProducto;
alert("El precio total de " + cantidadProducto + " unidades de " + nombreProducto + " es: $" + precioTotal);

