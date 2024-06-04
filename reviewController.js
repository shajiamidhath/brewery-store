import Review, { find } from '../models/Review';

export async function addReview(req, res) {
  const { breweryId, rating, description } = req.body;
  try {
    const review = new Review({ userId: req.user.id, breweryId, rating, description });
    await review.save();
    res.json(review);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}

export async function getReviews(req, res) {
  const { breweryId } = req.params;
  try {
    const reviews = await find({ breweryId }).populate('userId', 'name');
    res.json(reviews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
