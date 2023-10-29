import LogoFooter from '../../components/logo-footer/logo-footer';

function PageNotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">PAGE NOT FOUND</h1>
          </section>
          <LogoFooter/>
        </div>
      </main>
    </div>
  );
}

export default PageNotFound;
