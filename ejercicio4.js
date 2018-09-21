function conversionBinario(number){
    return (number<1)?"":conversionBinario((number-(number%2))/2)+number%2; 
}