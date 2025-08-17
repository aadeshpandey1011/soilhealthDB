const mongoose = require('mongoose');

const soilTestSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    ph: {
      type: Number,
      required: true,
    },
    nitrogen: {
      type: Number,
      required: true,
    },
    moisture: {
      type: Number,
      required: true,
    },
    testedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields automatically
  }
);

const SoilTest = mongoose.model('SoilTest', soilTestSchema);

module.exports = SoilTest;
