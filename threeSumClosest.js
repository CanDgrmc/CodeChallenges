function threeSumClosest(nums, target) {
    nums = nums.sort((a,b) => a-b)
    const length = nums.length

    console.log({nums})
    if (length < 3) return []

    let left = [];
    let right = [];
    for( let i=0; i < length -2 ; i++ ){
        let j = i + 1
        let k = length -1

        while (j < k){

            let iNum = nums[i]
            let jNum = nums[j]
            let kNum = nums[k]
            let sum = kNum+jNum+iNum
            console.log({i,j,k, sum})

            if(sum > target) {
                right.push(sum)

            }
            else if(sum < target) {
                left.push(sum)
            }
            else return sum
            
            
            if(k-1 == j){
                j++
                k=length-1
            }else{
                k--
            }
            
        }
    }

    left = (left.length > 1) ? left.sort( (a,b) => a-b): left
    right = (right.length > 1) ? right.sort( (a,b) => a-b) : right
    

    const a = [...left, target,...right]
    const aIndex = a.indexOf(target)

    const before = a[aIndex-1]
    const after = a[aIndex+1]

    let diffBefore = Math.abs(before - target)
    let diffAfter = Math.abs(after - target)

    diffBefore = Number.isInteger(diffBefore) ? diffBefore : Math.pow(10,23)
    diffAfter = Number.isInteger(diffAfter) ? diffAfter : Math.pow(10,23)

    console.log({diffAfter,diffBefore,before,after, a,left, right})
    if(diffBefore < diffAfter){
        return before
    }else if (diffBefore > diffAfter){
        return after
    }else{
        return after
    }
    
}

console.log(threeSumClosest([-1,0,1,1,55],
    3))
    // [-1,-1,1,1,3]