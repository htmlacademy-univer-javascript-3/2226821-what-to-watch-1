import {Link} from 'react-router-dom';

const NotFound404 = (): JSX.Element => (
  <div>
    <h1>Ошибка 404! Запрашиваемая страница не найдена!</h1>
    <Link to='/'>Вернитесь на главную</Link>
  </div>
);

export default NotFound404;
