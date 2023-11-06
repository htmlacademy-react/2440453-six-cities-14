import { Link } from 'react-router-dom';
import LogoFooter from '../../components/logo-footer/logo-footer';
import { ROUTE_LIST } from '../../consts/const';

function PageNotFound(): JSX.Element {//TODO навигацию с логином сюда тоже надо
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">PAGE NOT FOUND</h1>
            <Link to={ROUTE_LIST.Root}>
              <h2>Вернуться на главную</h2>
            </Link>
          </section>
          <LogoFooter/>
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;
