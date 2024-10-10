const signupSchema = require("../model/signupSchema");

async function signupController(req, res) {
  let { name, email, password } = req.body;
  console.log(req.body);
  let signup = signupSchema({
    name,
    email,
    password,
  });

  try {
    await signup.save();
    res.send(signup);
  } catch (err) {
    console.log(err);
  }
}
module.exports = signupController;
