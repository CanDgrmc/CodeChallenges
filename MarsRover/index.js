const Log = require('./Log')

/**
 
 - "the lower-left coordinates are assumed to be 0,0"

    Moving From  to Directions: 
    N : (x, y+1)
    S : (x, y-1),
    W : (x-1, y),
    E : (x+1, y)
 */


const fieldLimit = {
    x: 0,
    y: 0
}

const roverClass = require('./Rover')


const setFieldLimit = (x,y) => {
    // "the first line of input is the upper-right coordinates of the plateau"

    fieldLimit.x = x
    fieldLimit.y = y

}
const secondLine = () => {
    
}
const thirdLine = () => {
    
}
const forthLine = () => {
    
}

function run (input) {
    const log = new Log('main')
    const responsePositions = []

    const rows = input.split('\n').map( r => r.trim()).filter( r => r != '')
    const fieldRow = rows.splice(0,1)[0]
    const [fieldx,fieldy] = fieldRow.split(' ')

    setFieldLimit(fieldx,fieldy)
    const rowsLen = rows.length

    for (let i=0; i < rowsLen; i=i+2){
        const {overage,parsed:roverProps} = trimRoverProps(rows[i])
        
        const [roverx,rovery,heading] = roverProps
        const Rover = new roverClass({
            x: parseInt(roverx),
            y: parseInt(rovery),
            heading: heading,
            log: new Log('rover')
        })

        log.success('Next')
        const {overage:nextOverage} = trimRoverProps(rows[i+2])
        let roverActions = rows[i+1].split('').concat(nextOverage || [])
        
        for(let action of roverActions){
            if(action == 'M'){
                Rover.move()
            }else{
                Rover.turn(action)
            }
        }

        responsePositions.push([Rover.x, Rover.y, Rover.heading].join(' '))

    }
    log.success('-RESPONSE-',false)
    log.success(responsePositions,false)
}

function trimRoverProps(props){
    const overage = []
    if(props == undefined){
        return {}
    }
    const parsed = props.split(' ')
    const len = parsed.length
    if(len > 3){
        for(let i = 0; i < len - 3; i++){
            overage.push(...parsed.splice(i,1))
        }
    }

    return {overage,parsed}
    
}

run(
    `
    5 5
    1 2 N
    LMLMLMLM
    M 3 3 E
    MMRMMRMRRM
    `
    )