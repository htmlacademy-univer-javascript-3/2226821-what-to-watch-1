import ReviewType from '../../types/review-type';
import { ReviewCard } from '../review-card/review-card';

type FilmReviewsProps = {
    reviews: ReviewType[];
}

export const FilmReviews = (props: FilmReviewsProps): JSX.Element => (
  <div className="film-card__reviews film-card__row">
    <div className="film-card__reviews-col">
      {props.reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
    </div>
  </div>
);
