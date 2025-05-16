const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/verifyToken');

// @desc    Get current user's profile
// @route   GET /api/profile
// @access  Private
router.get('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const profile = {
      course: user.course || '',
      gpa: user.gpa || '',
      location: user.location || '',
      incomeStatus: user.incomeStatus || '',
      specialCategories: user.specialCategories || '',
    };

    res.json({ profile });
  } catch (err) {
    console.error('GET /api/profile error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Update current user's profile
// @route   POST /api/profile
// @access  Private
router.post('/', verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const { course, gpa, location, incomeStatus, specialCategories } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        course,
        gpa,
        location,
        incomeStatus,
        specialCategories,
      },
      { new: true }
    ).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Profile updated successfully', profile: updatedUser });
  } catch (err) {
    console.error('POST /api/profile error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
