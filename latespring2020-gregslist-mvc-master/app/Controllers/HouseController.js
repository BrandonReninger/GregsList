import _houseService from '../Services/HouseService.js'
import _store from '../store.js'



function drawHouses() {
    let template = ""
    let houses = _store.State.houses

    houses.forEach((house, index) => template += house.getHouseTemplate(index));
    document.getElementById("houses").innerHTML = template
}


export default class HouseController {
    constructor() {
        console.log("HouseControl")
    }

    createHouse(event) {
        event.preventDefault()
        let formData = event.target

        let newHouseObject = {
            address: formData.address.value,
            price: formData.price.value,
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            squarefeet: formData.squarefeet.value,
            imgUrl: formData.imgUrl.value
        }
        _houseService.createHouse(newHouseObject)
        formData.reset()
    }

}