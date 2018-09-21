function areaCircunferencia(){
    radio = prompt("Ingrese el radio de un circulo:");
    if(radio > 0){
        area = Math.PI * Math.pow(radio, 2);
        console.log("El area del circulo es: " + area);
    }
    else if(radio <= 0){
        console.log("-1");
    }
    else{
        console.log("No es un dato valido");
    }
}