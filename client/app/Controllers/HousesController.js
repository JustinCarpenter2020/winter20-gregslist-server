import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _drawHouses() {
  console.log("drawing houses")
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    // NOTE Getters FAKE properties as methods
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}



export default class HousesController {
  constructor() {
    ProxyState.on("houses", _drawHouses)
    _drawHouses()
    this.getHouses()
  }

  getHouses(){
    try {
      housesService.getHouses()
    } catch (error) {
      console.error(error)
    }
  }

  createHouse() {
    window.event.preventDefault()
    console.log("creating house", 1)
    let form = window.event.target
    let newHouse = {
      bathrooms: form['bathrooms'].value,
      bedrooms: form['bedrooms'].value,
      levels: form['levels'].value,
      year: form['hYear'].value,
      price: form['hPrice'].value,
      description: form['hDescription'].value,
      imgUrl: form['hImgUrl'].value
    }
    try {
      housesService.createHouse(newHouse)
      
    } catch (error) {
      console.error(error)
    }

    // @ts-ignore
    form.reset()
    // @ts-ignore
    $("#new-house-modal").modal('hide');
  }


  deleteHouse(id) {
    console.log(id);
    try {
      housesService.deleteHouse(id)
    } catch (error) {
      console.error(error)
    }
  }

  houseBid(id, price){
    try {
      console.log(id, price)
      housesService.houseBid(id, price)
    } catch (error) {
      console.error(error)
    }
  }
}
