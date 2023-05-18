import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';


export const NotFound = (): JSX.Element => (
  <div>
    <h1>Error 404. Page is not found</h1>
    <Link to={AppRoute.MainPage}>Return to home page</Link>
  </div>
);

