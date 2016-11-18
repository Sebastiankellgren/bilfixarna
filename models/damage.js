// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  parts: {type: String, required: true},
  workers: {type: String, required: true},
  hours: {type: Number, required: true},
  status: {type: String, required: true}
});

module.exports = m.mongoose.model("damage", Schema);