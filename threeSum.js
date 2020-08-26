function threeSum (nums) {
    const length = nums.length
    nums = nums.sort((a,b) => a-b)
    if (length < 3) return []

    const arr = []
    for( let i=0; i < length -2 ; i++ ){
        let j = i + 1
        let k = length -1

        

        if(i > 0 && nums[i] === nums[i-1]) continue

        while (j < k){
            const iNum = nums[i]
            const jNum = nums[j]
            const kNum = nums[k]
            const sum = kNum+jNum+iNum
            if(sum < 0){
                j++
            }
            else if(sum > 0){
                k--
            }
            else{
                arr.push([iNum,jNum,kNum])

                while(nums[j] == nums[j+1] ){
                    j++
                }
                    
                while(nums[k] == nums[k-1]){
                    k--
                }
                j++
                k--
            }
        }
        
    }
    return arr
};



console.log(threeSum([-1,0,1,2,-1,-4,-5,15,-25,32,-31]))