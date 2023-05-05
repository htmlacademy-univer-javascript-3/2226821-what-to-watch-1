import { Navigate } from 'react-router-dom';
import AuthStatus from '../../utils';


type PrivateRouteProps = {
    authStatus: AuthStatus;
    children: JSX.Element;
};

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authStatus, children} = props;
  return (
    authStatus === AuthStatus.Auth ? children : < Navigate to={'/login'} />
  );
};

export default PrivateRoute;
