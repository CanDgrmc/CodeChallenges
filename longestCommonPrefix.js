function  longestCommonPrefix(strs) {
    if(strs.length < 2){
        return strs[0] || ""
    }
    const sortByLength = strs.sort( (a,b) => a.length - b.length)
    const shortest = sortByLength.shift().split('')
    let prefix = ''
    
    for(let letterIndex in shortest){
        newPrefix = prefix + shortest[letterIndex]
        let contains = []
        for(let word of sortByLength){
            if(word.indexOf(newPrefix) == 0){
                contains.push(true)
            }else{
                contains.push(false)
            }
        }
        if(contains.indexOf(false) > -1 ){
            return prefix
        }else{
            prefix = newPrefix
        }

    }
    return  prefix

};

console.log(longestCommonPrefix(["aca","cba"]))