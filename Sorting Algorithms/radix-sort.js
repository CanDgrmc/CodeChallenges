function radixSort(arr){
    if (arr.length < 2) return arr

    let iteration = 0

    for(let i of arr){
        let len = i.toString().length
        iteration = len > iteration ? len : iteration
    }
    

    for(let digit=0; digit < iteration; digit++){
        const buckets = Array.from({
            length: 10
        }, () => [])
        for(let i=0; i < arr.length; i++){
            const digitVal = Math.floor(arr[i] / Math.pow(10,digit)) % 10

            buckets[digitVal].push(arr[i])
        }
        arr = [].concat(...buckets)
    }

    return arr

}


console.log(radixSort([5,3,4,22,2]))