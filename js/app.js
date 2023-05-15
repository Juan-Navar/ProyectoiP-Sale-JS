alert ("Ingrese la Opcion de Telefonia que decea, PARA SALIR INGRESE 0")
let seleccionarTelefono = Number(prompt( " 1-iPhone 14 u$1100 \n 2-iPhone 14 Pro u$1250\n 3-iPhone 14 Promax u$1540 "));
let ingreseCantidad;
let total = 0;

const cantidad = (cant, precio) => {
    return cant * precio
}


while (seleccionarTelefono != 0) {
    switch (seleccionarTelefono) {
        case 1:
            ingreseCantidad = Number(prompt("El Producto Seleccionado es un iPhone 14 de 256GB en color Blanco, indique la cantidad de equipos: "))
                total += cantidad(ingreseCantidad, 1100);
            break;
        case 2:
            ingreseCantidad = Number(prompt("El Producto Seleccionado es un iPhone 14 Pro de 512GB en color Negro, indique la cantidad de equipos: "))
                total += cantidad(ingreseCantidad, 1250);
            break;
        case 3:
            ingreseCantidad = Number(prompt("El Producto Seleccionado es un iPhone 14 Promax de 1TB en color Blue, indique la cantidad de equipos: "))
                total += cantidad(ingreseCantidad, 1540);
            break;

            default:
            break;
    }
    seleccionarTelefono = Number(prompt( " 1-iPhone 14 u$1100 \n 2-iPhone 14 Pro u$1250\n 3-iPhone 14 Promax u$1540 "));
}

alert ("El total de la compra es de: " + total)

const envio = () => {
    if (total >= 2500) {
        alert ("El envio es GRATUITO")
    } 
}

envio()

const metodoDePago = () => {
    let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo" )
    if (metodo == "tarjeta") {
      total *= 1.1
      alert("Tenes un recargo del 10%, su total es de: "+ total)
    }else if ( metodo == "efectivo") {
      total -= 100
      alert("Tenes un descuento de 100 u$, el total es:" + total)
    }
}

metodoDePago()