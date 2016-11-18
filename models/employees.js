// Create a new mongoose schema
var Schema = m.mongoose.Schema({
  SSN: {type: Number, required: true},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  title: {type: Number, required: true},
  vacation: [{
    from: {type: Date},
    to: {type: Date}
  }]
});

module.exports = m.mongoose.model("employees", Schema);