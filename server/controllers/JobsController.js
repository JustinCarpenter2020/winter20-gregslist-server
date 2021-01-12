import BaseController from "../utils/BaseController"
import {jobService} from "../services/JobsService"
import { dbContext } from "../db/DbContext"


export class JobsController extends BaseController {
  constructor(){
    super("api/jobs")
    this.router
    .get("", this.getAll)
    .get("/:id", this.getOne)
    .post("", this.create)
    .put("/:id", this.edit)
    .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
   try {
     res.send(await jobService.getAll(res.query))
   } catch (error) {
     next (error)
   }
  }
  async getOne(req, res, next) {
   try {
     res.send(await jobService.getOne(req.params.id))
   } catch (error) {
    next (error)
   }
  }
  async create(req, res, next) {
   try {
     res.send(await jobService.create(req.body))
   } catch (error) {
    next (error)
   }
  }
 async edit(req, res, next) {
   try {
     res.send(await jobService.edit(req.params.id, req.body))
   } catch (error) {
    next (error)
   }
  }
 async delete(req, res, next) {
   try {
     res.send(await jobService.delete(req.params.id))
   } catch (error) {
    next (error)
   }
  }
}