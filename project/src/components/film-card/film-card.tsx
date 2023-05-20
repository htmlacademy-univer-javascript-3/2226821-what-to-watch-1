import {Link} from 'react-router-dom';
import { VideoPlayer } from '../video-player/video-player';
import FilmType from '../../types/film-type';
import { useState, useEffect } from 'react';

type FilmCardProps = {
  film: FilmType;
  setActiveFilmCard: (id: number) => void;
  active: boolean;
};

export const FilmCard = (props: FilmCardProps): JSX.Element => {
  const [isPlayingNow, setToPlay] = useState(false);
  useEffect(() => {
    if (props.active) {
      const timer = setTimeout(() => setToPlay(true), 1000);
      return () => {
        clearTimeout(timer);
        setToPlay(false);
      };
    }
  }, [props.active]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => props.setActiveFilmCard(props.film.id)}
      onMouseLeave={() => props.setActiveFilmCard(NaN)}
    >
      <div className="small-film-card__image">
        {isPlayingNow
          ? <VideoPlayer src={props.film.previewVideoLink} poster={props.film.posterImage} muted />
          : <img src={props.film.posterImage} alt={props.film.name} width="280" height="175" />}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${props.film.id}`} className="small-film-card__link">{props.film.name}</Link>
      </h3>
    </article>
  );
};


