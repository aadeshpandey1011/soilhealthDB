const express = require('express');
const {
  createSoilTest,
  getSoilTests,
  updateSoilTest,
  deleteSoilTest,
} = require('../controllers/soilTestController');

const router = express.Router();

// Route to get all soil tests
router.get('/', getSoilTests);

// Route to create a new soil test
router.post('/', createSoilTest);

// Route to update a soil test by ID
router.put('/:id', updateSoilTest);

// Route to delete a soil test by ID
router.delete('/:id', deleteSoilTest);

module.exports = router;

