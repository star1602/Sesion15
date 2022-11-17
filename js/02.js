function Numero(){

    let numerorandom = +prompt ("Ingresa un número");

    if (numerorandom >=500){
        document.write(`El 18% es: ${numerorandom*(18/100)}`);
    }

    else{
        alert("El número es menor a 500, inténtalo de nuevo")
    }
}

Numero()
    

