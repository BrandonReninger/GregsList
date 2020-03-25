export default class House {
    constructor(data) {
        this.address = data.address
        this.price = data.price
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.squarefeet = data.squarefeet
        this.imgUrl = data.imgUrl
    }
}