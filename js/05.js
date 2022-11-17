function promedio(){

    let nombre = prompt("Ingrese su nombre")
    let parcial = +prompt("Ingrese la nota de su examen parcial")
    let final = +prompt("Ingrese la nota de su examen final")
    let practicas = +prompt("Ingrese la nota de su examen de practicas")

    let promedio = parcial + (final*2) + practicas

    if (promedio > 10){
        alert(`${nombre} tiene un promedio de: ${promedio/4}`);
    }
    else{
        alert("Lamentablemente, desaprobó.")
    }
}

promedio()