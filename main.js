class Engine {
    constructor(engineName) {
        this.engineName = engineName
    }

    startEngine() {
        console.log(`Engine ${this.engineName} is starting...`)
    }
}

class Car extends Engine {
    constructor(engineName, brandCar) {
        super(engineName)
        this.brandCar = brandCar
    }

    run() {
        console.log(`Car ${this.brandCar} is running`)
    }
}

const car = new Car('V6', 'Toyota')
