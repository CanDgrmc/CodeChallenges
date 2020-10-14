
function largestItemAssociation(itemAssociation)
{
    // WRITE YOUR CODE HERE 
    
    const firstItem = itemAssociation[0]
    const repeated =[]
    let items = []
    let result = []
    for (let itemSetIndex in itemAssociation){
        const itemSet = itemAssociation[itemSetIndex]
        for(let item of itemSet){
            if(items.includes(item)){
                if(repeated.includes(item)){
                    continue
                }else{
                    repeated.push(item)
                }
            }else{
                items.push(item)
            }
        }
        
    }

    if(repeated.length < 1){
        return firstItem
    }else{
        result = []
        for(let item of repeated){
            const i = itemAssociation.filter( i => {
                return i.indexOf(item)> -1
            })
            result = result.concat(i)
        }
    }
    

    
    return result
}
// FUNCTION SIGNATURE ENDS

console.log(largestItemAssociation([['item1','item2'],['item3','item4'],['item4','item5']]))