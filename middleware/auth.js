const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const verified = jwt.verify(token, process.env.TOKEN_KEY);
    // req.user = verified; //
  } catch (error) {
    return res
      .status(401)
      .send({ message: "Invalid token", error: error.message });
  }
  return next();
};

module.exports = verifyToken;
