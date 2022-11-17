
function Datos(){

    let Nombre = +prompt ("Ingresa el nombre del trabajador");
    let Sueldo = +prompt ("Ingresa el sueldo del trabajador");
    let hijos = +prompt ("Ingresa el N° de hijos del trabajador");

    let Bono = Sueldo*(7/100);


if (hijos >=1){
	document.write(`¡Felicidades, eres beneficiario del bono de S/ ${(Bono)}, por lo tanto, el sueldo final es de S/ ${(Sueldo+Bono)}    !`);
}

else if (hijos >=0){
	document.write("No te corresponde el bono");
}


}


Datos()