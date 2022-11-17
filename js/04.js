
function Compra(){

    let dinero = +prompt ("Ingresa el importe de tu compra");

    let Descuento = dinero*(12/100);


if (dinero >=150){
	document.write(`¡Felicidades, su descuento es de S/ ${(Descuento)}, por lo tanto, el importe final es de S/ ${(dinero-Descuento)}    !`);
}

else{
    alert("El número es menor a 150, inténtalo de nuevo")
}


}


Compra()