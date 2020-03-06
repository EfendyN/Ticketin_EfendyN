const jwt = require("jsonwebtoken");
const models = require("../models");
const User = models.user;

exports.register = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      password,
      gender,
      phone,
      address
    } = req.body;

    const check = await User.findOne({ where: { email } });
    if (check) {
      res
        .status(401)
        .send({ status: false, message: "The Email Already Exists" });
    } else {
      const regUser = await User.create({
        name,
        username,
        email,
        user_level: "user",
        password,
        gender,
        phone,
        address
      });

      if (regUser) {
        const token = jwt.sign({ user_id: regUser.id }, process.env.SECRET_KEY);
        res.status(200).send({ email, token, message: "Register Success" });
      } else {
        res.status(401).send({ status: false, message: "Invalid Register" });
      }
    }
  } catch (err) {
    console.log(err);
  }
};
