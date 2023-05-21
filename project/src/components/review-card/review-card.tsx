import ReviewType from '../../types/review-type';
import { getFullDate } from '../../pages/utils';

type ReviewCardProps = {
    review: ReviewType;
};

export const ReviewCard = (props: ReviewCardProps): JSX.Element => (
  <div className="review">
    <blockquote className="review__quote">
      <p className="review__text">{props.review.comment}</p>

      <footer className="review__details">
        <cite className="review__author">{props.review.user.name}</cite>
        <time className="review__date" >{getFullDate(props.review.date)}</time>
      </footer>
    </blockquote>

    <div className="review__rating">{props.review.rating}</div>
  </div>
);
