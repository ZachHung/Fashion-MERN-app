const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userData) => {
      err && res.status(403).json("Token is not valid!");
      req.user = userData;
      next();
    });
  } else return res.status(401).json("You are not authenticated!");
};
const verifyTokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else return res.status(403).json("You are not allow to do that!");
  });
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else return res.status(403).json("You are not allow to do that!");
  });
};

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAdmin };
