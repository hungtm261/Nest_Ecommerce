class Engine {
  engineName: string
  constructor(engineName: string) {
    this.engineName = engineName
  }

  startEngine() {
    console.log(`Engine ${this.engineName} is starting...`)
  }
}

class Car extends Engine {
  brandCar: string
  constructor(engineName: string, brandCar: string) {
    super(engineName)
    this.brandCar = brandCar
  }

  run() {
    console.log(`Car ${this.brandCar} is running`)
  }
}

const car = new Car('V60', 'Toyota')
car.run()
