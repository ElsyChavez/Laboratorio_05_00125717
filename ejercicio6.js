function valorAbsoluto(){
    numero = prompt("Ingrese un numero: ");
    if(numero > 0){
        console.log("El valor absoluto es: " + numero);
    }
    else if(numero <= 0){
        valorneg = numero*-1
        console.log("El valor absoluto es: " + valorneg);
    }
    else{
        console.log("No es un dato valido");
    }
}