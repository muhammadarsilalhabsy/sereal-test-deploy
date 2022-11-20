const User = require("../models/user");
const jwt = require("jsonwebtoken");

const authorize = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    // console.log(verified)
    // console.log(verified.user._id)
    const user = await User.findById(verified.user._id);
    if (user.role !== "admin") {
      return res.status(403).send("Unauthorized access");
    }
    // req.user = verified;
  } catch (error) {
    return res
      .status(401)
      .send({ message: "invalid token", error: error.message });
  }
  return next();
};

module.exports = authorize;
