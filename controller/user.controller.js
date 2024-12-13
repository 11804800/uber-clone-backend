const { validationResult } = require("express-validator");
const User = require("../model/user.model");
const createUser = require("../Services/user.service");

async function RegisterUser(req, res) {
  try {
    const errors = validationResult(req);
    const { fullname, email, password } = req.body;
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else {
      //hashing the password
      const hashPassword = await User.hashpassword(password);
      const user = await createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword,
      });
      const token = user.generateAuthToken();
      res.status(201).json({ user: user, token: token });
    }
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}
module.exports = {
  RegisterUser,
};
