const express = require('express');
const router = express.Router();

const Candidata = require('./../controllers/Candidate')
const Voter = require('./../controllers/Voter')

router.post('/add', Candidata.AddCandidate);
router.get('/cards', Candidata.GetCandidates);

router.post('/vote', Voter.VoteCandidates);
router.get('/result', Voter.VoteResult);

module.exports = router;
