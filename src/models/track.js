const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = Schema({
    timestamp: Number,
    coords: {
      latitude: Number,
      longitude: Number,
      altitude: Number,
      accuracy: Number,
      heading: Number,
      speed: Number
    }
  });
  const trackSchema = new Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    name: {
      type: String,
      default: ''
    },
    locations: [pointSchema]
},
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = Track = mongoose.model("Track", trackSchema);