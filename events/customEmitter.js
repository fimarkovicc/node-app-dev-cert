const EventEmitter = require("events")

module.exports = class CustomEmitter extends EventEmitter {
    constructor(){
        super()
        this.orderNumber = 0
    }

    order(product, quantity){
        this.orderNumber += 1
    }

    getOrderNumber(){
        return this.orderNumber
    }
}