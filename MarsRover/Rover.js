class Rover {

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
        log
    }) {
        this.x = x
        this.y = y
        this.heading = heading
        this.log = log
    }
    move() {
        this.log.onGoing('Rover is moving')
        switch (this.heading) {
            case 'N':
                this.y = this.y + 1
                break
            case 'S':
                this.y = this.y - 1
                break
            case 'E':
                this.x = this.x + 1
                break
            case 'W':
                this.x = this.x - 1
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
}

module.exports = Rover