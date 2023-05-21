import FilmType from '../../types/film-type';
import { ratingToScore } from '../../pages/utils';

type FilmOverviewProps = {
  film: FilmType;
};

export const FilmOverview = (props: FilmOverviewProps): JSX.Element => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{props.film.rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{ratingToScore(props.film.rating)}</span>
        <span className="film-rating__count">{props.film.scoresCount} ratings</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{props.film.description}</p>

      <p className="film-card__director"><strong>Director: {props.film.director}</strong></p>

      <p className="film-card__starring">
        <strong>Starring: {props.film.starring.join(', ')}</strong>
      </p>
    </div>
  </>
);
