const express = require('express');
const router = express.Router();
const { Feedback, validateFeedback } = require('../models/feedback');
const auth = require('../middleware/auth');


router.get('/',auth, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching feedbacks', error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { error } = validateFeedback(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const { fullName, email, message } = req.body;
    const newFeedback = new Feedback({ fullName, email, message });
    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving feedback', error: err.message });
  }
});

module.exports = router;
