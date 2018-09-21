function palindroma(){
    palabra = prompt("Ingrese una palabra:");
    if(palabra == palabra.split("").reverse().join("")){
        console.log("true");
    }
    else{
        console.log("false")
    }
}