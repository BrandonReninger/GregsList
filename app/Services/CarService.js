import Car from "../Models/Car.js"
import _store from '../store.js'


// @ts-ignore
let _api = new axios.create({
    baseURL: '//bcw-sandbox.herokuapp.com/api/cars',
    timeout: 3000
})


class CarService {
    delete(index) {
        _store.State.cars.splice(index, 1)
    }
    create(newCarObject) {
        let newCar = new Car(newCarObject)
        _store.State.cars.push(newCar)
        console.log(_store.State.cars)
    }
    constructor() {
        console.log("car service works")
    }
}


const CARSERVICE = new CarService()
export default CARSERVICE