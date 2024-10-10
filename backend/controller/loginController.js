const signupSchema = require("../model/signupSchema");

async function loginController(req, res) {
  let { email, password } = req.body;
  let existingUsers = await signupSchema.find({ email });
  if (existingUsers.length > 0) {
    if (existingUsers[0].password == password) {
      res.send("Login successful");
    } else {
      res.send("Password not match");
    }
    res.send();
  } else {
    res.send("Invalid Users");
  }
}

module.exports = loginController;
