const express = require('express');

const router = express.Router();

const { getTechRating, getAllTech } = require('../controllers/apiController');

router.get('/getalltech', getAllTech);
router.post('/gettechrating', getTechRating);

module.exports = router;