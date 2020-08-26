const {insertionSort} = require('./insertion-sort')
function bucketSort(arr) {
    if (arr.length < 2) return arr
    let minVal = arr[0]
    let maxVal = arr[0]
    for (let val of arr) {
        if (val > maxVal) maxVal = val
        else if (val < minVal) minVal = val
    }

    let bucketRange = 5
    let bucketArraySize = Math.floor((maxVal - minVal) / bucketRange) + 1

    let bucketArray = Array.from({
        length: bucketArraySize
    }, () => [])

    for (let val of arr){
        bucketArray[Math.floor((val - minVal) / bucketRange)].push(val)
    }

    for(let val of bucketArray){
        insertionSort(val)
    }
    return [].concat(...bucketArray)
}

console.log(bucketSort([12321, 1, 2, 5, 3, 99, 22, 32, 132, 123]))