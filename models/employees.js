// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  SSN: {type: Number, required: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  title: {type: Number, required: true},
  vacation: {type: Array, required: true}
});

module.exports = m.mongoose.model("employees", Schema);