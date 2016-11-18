// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  SSN: {type: Number, required: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  address: {type: Object, required: true},
  email: {type: String, required: true}
});

module.exports = m.mongoose.model("customers", Schema);