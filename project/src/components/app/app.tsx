import {BrowserRouter, Route, Routes} from 'react-router-dom';

import FilmType from '../../types/film-type';
import {AppRoute, AuthorizationStatus} from '../../const';
import ReviewType from '../../types/review-type';
import { PrivateRoute } from '../private_route/private_route';
import { MainPage } from '../../pages/main-page/main-page';
import { Film } from '../../pages/film/film';
import { AddReview } from '../../pages/add-review/add-review';
import { MyList } from '../../pages/my-list/my-list';
import { Player } from '../../pages/player/player';
import { SignIn } from '../../pages/sign-in/sign-in';
import { NotFound } from '../../pages/not-found/not-found';


type AppProps = {
  films: FilmType[];
  reviews: ReviewType[];
};

export const App = (props: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.NotFound}
        element={<NotFound />}
      />
      <Route
        path={AppRoute.MainPage}
        element={<MainPage films={props.films} />}
      />
      <Route
        path={AppRoute.AddReview}
        element={<AddReview films={props.films} />}
      />
      <Route
        path={AppRoute.Film}
        element={<Film films={props.films} reviews = {props.reviews}/>}
      />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute
            authorizationStatus={AuthorizationStatus.NoAuth}
          >
            <MyList films={props.films} />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Player}
        element={<Player films={props.films}/>}
      />
      <Route
        path={AppRoute.SignIn}
        element={<SignIn />}
      />
    </Routes>
  </BrowserRouter>
);
