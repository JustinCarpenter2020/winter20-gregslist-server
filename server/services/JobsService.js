import { dbContext } from "../db/DbContext"
import  {BadRequest} from "../utils/Errors"



class JobsService{
 async edit(id, body) {
   let house = await dbContext.Jobs.findOneAndUpdate(id, body, {new: true})
   if(!house){
     throw new BadRequest("No house with that Id")
   }
   return house
 }
 async delete(id) {
   let house = await dbContext.Jobs.findByIdAndDelete(id)
   if(!house){
    throw new BadRequest("This House Id does not exist")
   }
   return "job request has been deleted"
 }
 async getOne(id) {
   let house = dbContext.Jobs.findById(id)
   if(!house){
     throw new BadRequest("This House Id does not exist")
   }
   return house
 }
 async create(body) {
   return await dbContext.Jobs.create(body)
 }
 async getAll(query = {}) {
    return await dbContext.Jobs.find(query)
  }


}




export const jobService = new JobsService()