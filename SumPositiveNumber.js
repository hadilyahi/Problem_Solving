// you get an array of numbers , return the sum of all the positives ones.


function sumOfPositive(arr){
   let sum = 0 ;
for(let i=0;i<arr.length;i++){
    if (arr[i]  > 0){
        sum += arr[i];
    }
}
return sum ;
}

console.log(sumOfPositive([1,-3,5,9]));

// Solution 2 :

function sumPositive(arr){
   return arr.filter((x) => x>0)
   .reduce((acc,current) => acc + current , 0)
 }

 console.log(sumPositive([1,-3,5,9]));