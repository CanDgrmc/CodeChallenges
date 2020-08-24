var myAtoi = function(str) {
    const trimmed = str.trim()
    let parsed = 0
    if(Number.isInteger(parseInt(trimmed))){
        parsed = parseInt(trimmed) 
    }
    const int32 = Math.pow(2,31) 
    const int32Negative = int32 * -1

   
    if(parsed > int32 ){
        return int32
    }


    if(parsed < int32Negative ){
        return int32Negative
    }
    return parsed
};

console.log(myAtoi("2147483648"))