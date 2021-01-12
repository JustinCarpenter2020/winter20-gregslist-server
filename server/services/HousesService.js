import { dbContext } from "../db/DbContext"
import  {BadRequest} from "../utils/Errors"


class HousesService{
  async create(body) {
    return await dbContext.Houses.create(body)
  }
  async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }

}






export const housesService = new HousesService()