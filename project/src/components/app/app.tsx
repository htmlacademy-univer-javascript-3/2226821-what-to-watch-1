import AddReview from '../../pages/add_review/add_review';
import Film from '../../pages/film/film';
import MainPage from '../../pages/main_page/main_page';
import {MainPageProps} from '../../pages/main_page/main_page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyList from '../../pages/my_list/my_list';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign_in/sign_in';
import NotFound404 from '../../pages/404_not_found/404_not_found';

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
      <Route>
                path={Paths.NotFoundPath}
                element={<NotFound404/>}
      </Route>
      <Route>
                path={Paths.AddReviewPath}
                element={<AddReview/>}
      </Route>
      <Route>
                path={Paths.FilmPath}
                element={<Film/>}
      </Route>
      <Route>
                path={Paths.MainPagePath}
                element={<MainPage {...props}/>}
      </Route>
      <Route>
                path={Paths.MyListPath}
                element={<MyList/>}
      </Route>
      <Route>
                path={Paths.PlayerPath}
                element={<Player/>}
      </Route>
      <Route>
                path={Paths.LoginPath}
                element={<SignIn/>}
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
