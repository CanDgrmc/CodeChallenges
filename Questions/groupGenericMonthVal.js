const hashMap = {
    'OCA': 1,
    'ŞUB': 2,
    'MAR': 3
}

const data = [
    {
        year: 2019,
        month: 'OCA',
        value: 5
    },
    {
        year: 2019,
        month: 'ŞUB',
        value: 16
    },
    {
        year: 2019,
        month: 'MAR',
        value: 2
    },
    {
        year: 2020,
        month: 'OCA',
        value: 5
    },
    {
        year: 2020,
        month: 'ŞUB',
        value: 15
    },
    {
        year: 2020,
        month: 'MAR',
        value: 2
    },
]

let result1 = data.sort((a,b) => a.year - b.year).sort( (a,b )=> hashMap[a.month] - hashMap[b.month] )

console.log(result1)

const result2 = []
const groupSize = findDuplicateYearCount(result1)

console.log({groupSize})

for(let i=0; i < result1.length ; i=i+groupSize){
    
    const years = {}

    for(let j=i; j < i+groupSize; j++){
        console.log({j})
        years[result1[j].year] = result1[j].value
        
    }

    result2.push({
        name: result1[i].month,
        ...years
    })
}

console.log(result2)


function findDuplicateYearCount(arr){
    const refYear = arr[0]

    const filtered = arr.filter(i => i.month == refYear.month)

    return filtered.length
}