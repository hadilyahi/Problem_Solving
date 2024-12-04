
function sumWithoutHighestLowest(array){
    if (array == null) return 0
    let maxValue = Math.max(...array)
    let minValue = Math.min(...array)
    let filteredArray = array.filter((x) => x != maxValue && x != minValue)
    let newArray = filteredArray.reduce((acc,current) => acc + current,0)
    return newArray
}

console.log(sumWithoutHighestLowest([1,2,3,4,9]))

// solution 2 :

function sumWithout(array){
    if (array == null) return 0
    return array.filter((x)=> x != Math.max(...array) && x != Math.min(...array))
    .reduce((acc,current) => acc + current ,0)
}
console.log(sumWithout([1,2,3,4,10,20]))
//solution 3 :
function sumNumber(array){
    if (array == null) return 0
    return array.sort((a,b)=> a-b).slice(1,-1)
    .reduce((acc,current) => acc + current ,0)
}
console.log(sumNumber([1,1,2,3,4,10,20]))