
const productos = [
  { nombre:"Chomba Misericordia L", precio: 160},
  { nombre:"Chomba Misericordia M", precio: 140},
  { nombre:"Pantalon Misericordia M", precio: 250},
  { nombre:"Pantalon Misericordia S", precio:220},
]
let carrito = []

let seleccion = prompt("Bienvenido a la tienda de Azul Uniformes, ¿Podemos ayudarle en algo? Si/No")
while(seleccion != "Si" && seleccion != "No"){
  alert("Por favor, ingrese una opcion por Si o por No")
  seleccion = prompt("¿Necesita informacion sobre algun uniforme?")
}
if(seleccion == "Si"){
  alert("a continuacion le mostramos nuestros uniformes disponibles")
  let todosLosPoductos = productos.map((producto) =>producto.nombre + " " + producto.precio + "$")
  alert(todosLosPoductos.join(" - "))
} else if (seleccion =="No"){
  alert("Lamentamos no poder ayudarte en este momento, te esperamos pronto")
}
while(seleccion != "No"){
  let producto = prompt(`Agrega un producto a su carrito ingresando los siguientes materiales \n "Chomba Misericordia L" , \n "Chomba Misericordia M", \n "Pantalon Misericordia M" , \n "Pantalon Misericordia S" `)
  let precio = 0

  if (producto == "Chomba Misericordia L" || producto == "Chomba Misericordia M" ||  producto == "Pantalon Misericordia M" ||  producto == "Pantalon Misericordia S"){
    switch(producto) {
      case "Chomba Misericordia L":
        precio = 160
        break;
      case "Chomba Misericordia M":
        precio = 140
        break;
      case "Pantalon Misericordia M":
        precio = 250
        break;
      case "Pantalon Misericordia S":
        precio = 220
        break;
      default:
        break;
    }
  let unidades = parseInt(prompt("¿Cuantas unidades necesita?"))

  carrito.push({producto , unidades, precio})
  console.log(carrito)
  } else {
    alert("no tenemos ese uniforme")
  }
  seleccion =prompt("¿Desea agregar otro uniforme? Si/No")
  while(seleccion === "No"){
    alert("Detallamos de manera individual su carrito y el precio final")
    carrito.forEach((carritoFinal) => {
      alert(`Pedido ${carritoFinal.producto}, Cantidad: ${carritoFinal.unidades} ,el total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);
    })
  break
  }
}

const total =carrito.reduce((acc,el) => acc + el.precio * el.unidades , 0)
alert(`el total a pagar es: ${total}`);


