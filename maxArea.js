var maxArea = function(height) {
    let biggest = 0
    height.map( (firstPoint,i1) => {
        height.map( (secondPoint,i2) => {
            if(i1 < i2){

                const verticalLength = i2 - i1
                const num = Math.min(firstPoint,secondPoint)
                const area = num * verticalLength 
                area > biggest ? biggest=area : ''
            }
        })
    })
    return biggest
};



console.log(maxArea([1,8,6,2,5,4,8,3,7]))