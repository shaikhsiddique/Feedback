const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const { createToken } = require('../utils/jwt');
const { hashPassword, comparePassword } = require('../utils/hash-password');
const auth = require('../middleware/auth');

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(409).json({ message: 'Email already exists' });

    const hashed = await hashPassword(password);
    const admin = new Admin({ username, email, password: hashed });

    await admin.save();
    const token = await createToken({ id: admin._id });
    res.status(201).json({ message: 'Signup successful', token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
  
    try {
      const admin = await Admin.findOne({ email });
      if (!admin) return res.status(401).json({ message: 'Invalid credentials' });
  
      const isValid = await comparePassword(password, admin.password);
      if (!isValid) return res.status(401).json({ message: 'Invalid credentials' });
  
      const token = await createToken({ id: admin._id });
  
      res
        .cookie('authToken', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 7 * 24 * 60 * 60 * 1000
        })
        .status(200)
        .json({ message: 'Login successful', token });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

router.get('/', auth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
