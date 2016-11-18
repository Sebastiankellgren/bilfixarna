// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  parts: [{type: m.mongoose.Schema.Types.ObjectId, ref: "spareparts"}],
  employees: [{type: m.mongoose.Schema.Types.ObjectId, ref: "employees"}],
  hours: {type: Number, required: true},
  status: {type: String, required: true}
});

module.exports = m.mongoose.model("damage", Schema);