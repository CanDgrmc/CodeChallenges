var intToRoman = function(num) {
    if(num == 0) return;
    const symbols = [
        {index:1000, val:"M"},
        {index:900, val:"CM"},
        {index:500, val: "D"},
        {index:400, val: "CD"},
        {index:100, val:"C"},
        {index:90, val: "XC"},
        {index:50, val: "L"},
        {index:40, val: "XL"},
        {index:10, val:"X"},
        {index:9, val:"IX"},
        {index:5, val:"V"},
        {index:4, val:"IV"},
        {index:1, val: "I"},
    ]
    
    let romanStr = ''

    for(let {index,val} of symbols){
        const mod = num%index
        const count = Math.floor(num / index)
        num = mod
        romanStr += val.repeat(count)
    }
    return romanStr
};

console.log(intToRoman(1994))