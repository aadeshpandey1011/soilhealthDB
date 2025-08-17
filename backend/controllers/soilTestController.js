const SoilTest = require('../models/SoilData');

// @desc    Create a new soil test
// @route   POST /api/soiltests
// @access  Public
const createSoilTest = async (req, res) => {
  try {
    const { location, ph, nitrogen, moisture } = req.body;
    const newTest = new SoilTest({ location, ph, nitrogen, moisture });
    const savedTest = await newTest.save();
    res.status(201).json(savedTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all soil tests
// @route   GET /api/soiltests
// @access  Public
const getSoilTests = async (req, res) => {
  try {
    const tests = await SoilTest.find();
    res.json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a soil test by ID
// @route   PUT /api/soiltests/:id
// @access  Public
const updateSoilTest = async (req, res) => {
  try {
    const test = await SoilTest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!test) {
      return res.status(404).json({ message: 'Soil test not found' });
    }
    res.json(test);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a soil test by ID
// @route   DELETE /api/soiltests/:id
// @access  Public
const deleteSoilTest = async (req, res) => {
  try {
    const test = await SoilTest.findByIdAndDelete(req.params.id);
    if (!test) {
      return res.status(404).json({ message: 'Soil test not found' });
    }
    res.json({ message: 'Soil test deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSoilTest,
  getSoilTests,
  updateSoilTest,
  deleteSoilTest,
};
