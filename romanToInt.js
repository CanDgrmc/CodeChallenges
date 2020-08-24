

var romanToInt = function(s) {
    const symbols = {
        "CM": 900,
        "M": 1000,
        "CD": 400,
        "D": 500,
        "XC": 90,
        "C": 100,
        "XL": 40,
        "L": 50,
        "IX": 9,
        "X": 10,
        "IV":4,
        "V": 5,
        "I": 1
    }
    
    let total = 0
    for(let symbol in symbols){
        if( s.indexOf(symbol) > -1){
            const count = s.split(symbol).length -1
            s = s.split(symbol).join('')
            total += symbols[symbol] * count
        }
    }
    return total
};


console.log(romanToInt('MCMXCIV'))