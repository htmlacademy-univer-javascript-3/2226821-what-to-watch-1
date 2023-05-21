import FilmType from '../../types/film-type';
import { Fragment } from 'react';
import { timestampToStr } from '../../pages/utils';

type FilmDetailsProps = {
    film: FilmType;
}

export const FilmDetails = (props: FilmDetailsProps): JSX.Element => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">{props.film.director}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          {props.film.starring.map((star) => <Fragment key={star}>{star} <br /></Fragment>)}
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">{timestampToStr(props.film.runTime)}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{props.film.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{props.film.released}</span>
      </p>
    </div>
  </div>
);
