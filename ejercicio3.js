function Fibonacci(number){
    return(number==0 || number ==1)? number : (Fibonacci(number-1)+Fibonacci(number-2));
}