const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Get token from request header
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  try {
    // Remove "Bearer "
    const token = authHeader.replace("Bearer ", "");

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user info in request
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = authMiddleware;