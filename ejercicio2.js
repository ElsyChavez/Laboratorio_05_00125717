
function Ordenar(lista){ 
    for(var i = 0; i < lista.length; i++){ 
        for(var j = 0; j< lista.length -1; j++){ 
             if(lista[j+1] < lista[j]){ 
                var aux = lista[j+1]; 
                lista[j + 1] = lista[j]; 
                lista[j] = aux; 
            }        
        } 
    } 
    return lista 
} 
 
//prueba
console.log("Lista original:" + [3,4,70,1,2,3,5]);
console.log(Ordenar([3,4,70,1,2,3,5]));