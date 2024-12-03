// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers 
function evenOdd(value){
    if (value % 2 === 0){
        return "Even";
    }
    else{
        return "odd";
    }
}
console.log(evenOdd(8));

//better solution :

function evenodd(number){
    return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenodd(5));