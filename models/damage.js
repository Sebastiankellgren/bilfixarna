// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  description: {type: String, required: true},
  parts: {type: Schema.Types.ObjectId, ref: 'Spare_Parts', required: true},
  workers: {type: Schema.Types.ObjectId, ref: 'Employees', required: true},
  hours: {type: Number, required: true},
  status: {type: String, required: true}
});

module.exports = m.mongoose.model("Damage", Schema);