const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', auth, addReview);
router.get('/:breweryId', getReviews);

module.exports = router;
