const Review = require('../natours_models/reviewModel');
const factory = require('./handlerFactory');
// const AppError = require('../utils/appErrors');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (req.body.user) req.body.user = req.user.id;
  next();
};
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

exports.getAllReviews = factory.getAll(Review);
