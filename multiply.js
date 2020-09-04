const multiply = function(num1, num2) {
    const length1 = num1.length
    const length2 = num2.length
    const total = Array(length1 + length2).fill(0);
    
    if(length1 < 110 && length1 > 0 && length2 < 110 && length2 > 0 ){
        
        let i = length1 -1
        while(i >= 0){
            let carry = 0
            let j = length2 -1
            while (j >= 0){
                total[1+i+j] += carry + num1[i]*num2[j];
                carry = Math.floor(total[1+i+j] / 10);
                total[1+i+j] = total[1+i+j] % 10;
                j--
            }
            total[i] += carry
            i--
        }
    
        return total.join('').replace(/^0*(\d)/, "$1");
    }
    else{
        return "0"
    }
    
    
    
};

console.log(multiply("123456789",
"987654321"))