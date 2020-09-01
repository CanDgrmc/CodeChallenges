var reverse = function(x) {
    if(x===0){
        return x
    }
    let reverse = 0
    const limit = Math.pow(2,31) 
    let isPositive = x > 0
    let str = isPositive ? x.toString() : (x * -1).toString()

    reverse = parseInt( x.toString().split('').reverse().join(''))
    if (reverse> limit) return 0
    
    return isPositive  ? reverse : reverse*-1

};

console.log(reverse(1563847412))