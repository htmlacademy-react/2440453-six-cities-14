import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../auth.enum';
import { ROUTE_LIST } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: AuthorizationStatus;
}

function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authStatus === AuthorizationStatus.Auth ? children : <Navigate to={ROUTE_LIST.Root}/>
  );
}

export default PrivateRoute;
