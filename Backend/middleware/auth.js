const Admin = require('../models/admin.js');
const { verifyToken } = require('../utils/jwt.js');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.authToken || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: "Access Denied. No token provided." });
    }
    
    const decoded = await verifyToken(token);
    const admin = await Admin.findById(decoded.id).select('-password');
    if (!admin) {
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    req.admin = admin;
    next();
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};

module.exports = auth;
