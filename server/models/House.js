import mongoose from "mongoose";
const Schema = mongoose.Schema

const House = new Schema(
  {
    bedrooms: {type: String, required: true},
    bathrooms : { type: String, required: true},
    levels: {type: Number, required: true},
    year: {type: Number, required: true, min: 1940, max: 2022},
    price: {type: Number, required: true},
    description: {type: String, maxlength: 144 },
    imgUrl: {type: String, default: "http://placehold.it/200x200"}
  }
)

export default House