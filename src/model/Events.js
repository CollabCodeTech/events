import { Schema, model } from "mongoose";

const EventsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  dateStart: {
    type: Date,
    required: true
  },
  dateEnd: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    min: 140,
    max: 600,
    required: true
  },
  place: {
    type: String,
    required: true
  }
});

export default model("Events", EventsSchema);
