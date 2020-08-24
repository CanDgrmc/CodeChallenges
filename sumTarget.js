var twoSum = function(nums, target) {
    for (let n in nums){
        let firstNumber = nums[n]
        console.log({n})
        
        for (let n2 in nums){
            console.log({n2})
            let secondNumber = nums[n2]
            if(n != n2 && firstNumber + secondNumber == target){
                return [n,n2]
            }
        }
        
    }
};

console.log(twoSum([3,2,4],6))