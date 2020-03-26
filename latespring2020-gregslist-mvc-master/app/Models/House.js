export default class House {
    constructor(data) {
        this.address = data.address
        this.price = data.price
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.squarefeet = data.squarefeet
        this.imgUrl = data.imgUrl
    }

    getHouseTemplate(index) {
        return /*html*/ `
        <div class="col-4 border border-info rounded shadow">
            <h3>Address: ${this.address}</h3>
            <h5>Price: ${this.price}</h5>
            <h5>Bedrooms: ${this.bedrooms}</h5>
            <h5>Bathrooms: ${this.bathrooms}</h5>
            <h5>Square Ft: ${this.squarefeet}</h5>
            <img class="img-fluid" src="${this.imgUrl}">
            <button class = "btn btn-danger btn-block"
            onclick = "app.houseController.delete(${index})">Delete</button>
        </div>
        `
    }
}