import _houseService from '../Services/HouseService.js'
import _store from '../store.js'




export default class HouseController {
    constructor() {
        console.log("HouseControl")
    }

    createHouse() {
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
    }

}