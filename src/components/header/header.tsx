import LoginTab from '../login-tab/login-tab';

function Header():JSX.Element { //TODO не отображать для login-page
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <LoginTab/>
        </div>
      </div>
    </header>
  );
}

export default Header;
