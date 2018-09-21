function anioBisiesto(){
    anio = prompt("Ingrese un anio: ");
    if(((anio%4)==0) && ((anio%100)!=0) || ((anio%400)==0)){
        console.log("Es anio bisiesto.");
    }
    else{
        console.log("No es bisiesto o no es un dato valido");
    }
}