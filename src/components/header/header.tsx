import { ROUTE_LIST } from '../../consts';
import LoginTab from '../login-tab/login-tab';
import { Link } from 'react-router-dom';

function Header():JSX.Element { //TODO не отображать для login-page
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={ROUTE_LIST.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <LoginTab/>
        </div>
      </div>
    </header>
  );
}

export default Header;
