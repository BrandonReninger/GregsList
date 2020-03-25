import House from "../Models/House.js"
import _store from '../store.js'





class HouseService {
    createHouse(newHouseObj) {
        let newHouse = new House(newHouseObj)
        _store.State.houses.push(newHouse)

    }
    constructor() {
        console.log("howdy house service")
    }
}


const HOUSESERVICE = new HouseService()
export default HOUSESERVICE