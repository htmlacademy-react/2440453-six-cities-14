import Header from '../../components/header/header';
import LogoFooter from '../../components/logo-footer/logo-footer';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { FormEvent, useRef } from 'react';
import { LoginAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus, ROUTE_LIST } from '../../consts';


function LoginPage(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const HandleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(loginRef.current !== null && passwordRef.current !== null) {
      dispatch(LoginAction({email: loginRef.current.value, password: passwordRef.current.value}));
      if(authStatus === AuthorizationStatus.Auth) {
        navigate(ROUTE_LIST.Root);
      }
    }
  };

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>{'6 cities - залогиньтесь'}</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="" onSubmit={HandleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={loginRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <LogoFooter/>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
