import { dbContext } from "../db/DbContext"
import  {BadRequest} from "../utils/Errors"


class HousesService{
  async edit(id, body) {
    let updated = await dbContext.Houses.findByIdAndUpdate(id, body, {new: true})
    if (!updated){
      throw new BadRequest("No house exists with that Id")
    }
    return updated
  }
  async delete(id) {
    //  Review: what is the difference between FindOneAndDelete and FindByIdAndDelete?
    let house = await dbContext.Houses.findByIdAndDelete(id)
    if(!house){
      throw new BadRequest("No house exists with that Id")
    }
    return "House has been deleted"
  }
  async getOne(id) {
    let houseFound = await dbContext.Houses.findById(id)
    if(!houseFound){
      throw new BadRequest("No house exists with that Id")
    }
    return houseFound
  }
  async create(body) {
    return await dbContext.Houses.create(body)
  }
  async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }

}






export const housesService = new HousesService()