function insertionSort(arr) {
    if (arr.length < 2) return arr

    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }

    return arr
}

//console.log(insertionSort([12321,1,2,5,3,99,22,32,132,123]))

module.exports = {
    insertionSort
}