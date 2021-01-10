const colors = require('colors')
class Log {
    source

    constructor(source){
        this.source = source
    }
    success(msg,tag=true){
        if(tag){
            console.log(`${this.source}::${msg}`.green)
        }else{
            console.log(`${msg}`.green)
        }
        
    }
    
    trace(msg){
        console.log(`${this.source}::${msg}`.blue)
    }

    onGoing(msg){
        console.log(`${this.source}::${msg}`.underline)
    }

    error(msg,tag=true){
        if(tag){
            console.log(`${this.source}::${msg}`.red)
        }else{
            console.log(`${msg}`.red)
        }
    }

}

module.exports = Log