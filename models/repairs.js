// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  reg: {type: String, required: true},
  model: {type: String, required: true},
  customer: [{type: m.mongoose.Schema.Types.ObjectId, ref: "customers"}],
  damages: {type: Array, required: true},
  status: {type: String, required: true}
});

module.exports = m.mongoose.model("repairs", Schema);