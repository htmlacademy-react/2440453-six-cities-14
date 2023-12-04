import { AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks/hooks';
import LogIn from './login-auth';
import LogOut from './login-unauth';


function LoginTab() : JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  if (authStatus === AuthorizationStatus.Auth) {
    return (<LogIn/>);
  } else {
    return (<LogOut/>);
  }
}

export default LoginTab;
