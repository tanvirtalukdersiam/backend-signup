const { default: mongoose, Types } = require("mongoose");
const Schema = mongoose.Schema;

const signupSchema = new Schema({
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  email: {
    type: String,
    require: [true, "Email is required"],
  },
  password: {
    type: String,
    require: [true, "Password is required"],
  },
});

module.exports = mongoose.model("signup", signupSchema);
