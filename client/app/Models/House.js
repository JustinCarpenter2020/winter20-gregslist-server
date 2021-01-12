
export default class House {
  constructor({ bedrooms, bathrooms, levels, price, description, imgUrl, id, year }) {
    console.log("MODEL: constructor", 3)
    this.id = id
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.levels = levels
    this.year = year
    this.price = price
    this.description = description
    this.imgUrl = imgUrl
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3 d-flex align-items-stretch flex-wrap">
    <div class="card cardFont cards">
        <img class="card-img-top" src="${this.imgUrl}" alt="">
        <div class="card-body">
            <h4 class="card-title">${this.price}</h4>
            <p class="card-text">${this.description} built in <b>${this.year}</b></p>
            <p class="card-text">Bedrooms- ${this.bedrooms}</p>
            <p class="card-text"> Bath- ${this.bathrooms}</p>
            <p class="card-text">Levels- ${this.levels}</p>
            <div class="text-right">
            <button type="button" class="btn btn-success" onclick="app.housesController.houseBid('${this.id}', '${this.price += 1000}')">Bid</button>
                <button type="button" class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}