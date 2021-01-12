
export default class Job {
  constructor({ company, hours, jobTitle, rate, description, _id}) {
    this.id = _id
    this.company = company
    this.hours = hours
    this.jobTitle = jobTitle
    this.description = description
    this.rate = rate
  }

  get Template() {
    return `
    <div class="col-md-4 col-6 mt-3 d-flex align-items-stretch flex-wrap">
    <div class="card cardFont cards">
        <div class="card-body">
            <h4 class="card-title">${this.company}-${this.jobTitle}-${this.rate}Hourly Rate:</h4>
            <p class="card-text">${this.description} Hours:${this.hours}</b></p>
            <div class="text-right">
                <button type="button" class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
            </div>
        </div>
    </div>
    </div>
        `
  }
}