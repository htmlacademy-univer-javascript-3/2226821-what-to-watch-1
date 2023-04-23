type OneCardProps = {
    imgSrc: string;
    imgAlt: string;
    filmName: string;
}

function OneCardComponent (props: OneCardProps) {
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={props.imgSrc} alt={props.imgAlt} width="280" height="175" />
    </div>
    <h3 className="small-film-card__title">
      <a className="small-film-card__link" href="film-page.html">{props.filmName}</a>
    </h3>
  </article>
};

export default OneCardComponent;
