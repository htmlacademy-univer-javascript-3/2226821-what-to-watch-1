import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmReleaseYear: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmName={PromoFilm.filmName} filmGenre={PromoFilm.filmGenre} filmReleaseYear={PromoFilm.filmReleaseYear} />
  </React.StrictMode>,
);
