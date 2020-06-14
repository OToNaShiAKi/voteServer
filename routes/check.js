const express = require('express');
const router = express.Router();

// const Candidata = require('./../controllers/Candidate')
const Voter = require('./../controllers/Voter')

router.get('/voters', Voter.GetVoters);
router.get('/remove', Voter.RemoveCell);

module.exports = router;
