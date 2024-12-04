

function repeatStr(number , str) 
{
    let newString = ""
    for(let i=0;i<number;i++){
        newString += str
       
    }
    return newString;
}
console.log(repeatStr(5," hello "))

//Solution 2 :

function repeatString(number , str) 
{
   return str.repeat(number)
}
console.log(repeatString(5," hello "))



