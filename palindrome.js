function palindrome(str){
    const reg = /[\W_]/g
    str = str.toLowerCase().replace(reg,'')
    let reversed = str.split("").reverse().join("")
    return reversed == str
}

console.log(palindrome('race car'))