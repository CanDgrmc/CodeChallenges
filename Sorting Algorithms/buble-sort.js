function bubleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length; j++) {
            console.log(`${arr[i]} ==> ${arr[j]} => ${arr[j+1]}`)

            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr
}

console.log(bubleSort([55,14,11,2,4,66,21]))