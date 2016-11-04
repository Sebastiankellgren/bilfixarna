// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  name: {type: String, required: true},
  partNo: {type: String, required: true},
  price: {type: Number, required: true},
  model: {type: String, required: true},
  VAT: {type: Number, required: true}
});

module.exports = m.mongoose.model("Spare-Parts", Schema);