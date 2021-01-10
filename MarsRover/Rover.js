class Rover {
    uid
    x = 0
    y = 0
    heading = 'N'
    log
    directions = {
        'N': {
            L : 'W',
            R: 'E'
        },
        'S': {
            L : 'E',
            R: 'W'
        },
        'W': {
            L : 'S',
            R: 'N'
        },
        'E': {
            L : 'N',
            R: 'S'
        },

    }
    constructor({
        x,
        y,
        heading,
        limitX,
        limitY,
        log,
        uid
    }) {
        this.x = x
        this.y = y
        this.heading = heading
        this.log = log
        this.limitX = limitX
        this.limitY = limitY
        this.uid = uid
    }
    move() {
        this.log.onGoing('Rover is moving')
        switch (this.heading) {
            case 'N':
                this.y = this.checkLimit(this.y+1, this.limitY) 
                break
            case 'S':
                this.y = this.checkLimit(this.y-1, this.limitY)
                break
            case 'E':
                this.x = this.checkLimit(this.x+1, this.limitX)
                break
            case 'W':
                this.x = this.checkLimit(this.x-1, this.limitX)
                break
        }

        this.log.success(`new rover coordinates (${this.x}, ${this.y}) and heading to ${this.heading}`)
    }

    turn(to){
        this.log.trace(`Rover is turning to ${to}`)
        const currentDirection = this.directions[this.heading]
        const newDirection = currentDirection[to]
        this.heading = newDirection

        this.log.trace(`new rover direction ${newDirection}`)
    }

    checkLimit(to,limit){
        if(to <= limit && to >= 0){
            return to
        }else{
            
            throw new Error('limit-exceeded')
        }
    }

    
}

module.exports = Rover