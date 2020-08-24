function largestOfFour(arrays){
    
    const arr = arrays.map( array => array.join(',')).join(',').split(',').sort( (a,b) => b-a)
    const result = arr.filter((value) => arr.indexOf(value) < 4)
   
    console.log(result)
}

largestOfFour([[1,2,3],[4,5,6]])