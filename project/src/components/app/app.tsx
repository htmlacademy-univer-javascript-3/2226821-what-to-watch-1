import AddReview from '../../pages/add_review/add_review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main_page/main_page';
import {MainPageProps} from '../../pages/main_page/main_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyList from '../../pages/my_list/my_list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign_in/sign_in';
import NotFound404 from '../../pages/404_not_found/404_not_found';
import PrivateRoute from '../private_route/private_route';
import AuthStatus from '../../utils';

const enum Paths {
    NotFoundPath = '*',
    AddReviewPath = '/films/:id/review',
    FilmPath = '/films/:id',
    MainPagePath = '/',
    MyListPath = '/mylist',
    PlayerPath = '/player/:id',
    LoginPath = '/login'
}

const App = (props: MainPageProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
    <Route path={Paths.AddReviewPath} element={<AddReview/>} />
      <Route path={Paths.FilmPath} element={<Film/>} />
      <Route path={Paths.MainPagePath} element={<MainPage {...props}/>} />
      <Route path={Paths.MyListPath} element={
        <PrivateRoute authStatus={AuthStatus.NoAuth}>
          <MyList/>
        </PrivateRoute>
      }
      />
      <Route path={Paths.NotFoundPath} element={<NotFound404/>} />
      <Route path={Paths.PlayerPath} element={<Player/>} />
      <Route path={Paths.LoginPath} element={<SignIn/>} />
    </Routes>
  </BrowserRouter>
);

export default App;
