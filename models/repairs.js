// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  reg: {type: String, required: true},
  model: {type: String, required: true},
  owner: {type: Schema.ObjectId, ref: 'Customers', required: true},
  damages: {type: Array, required: true}
});

module.exports = m.mongoose.model("Repairs", Schema);