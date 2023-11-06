import Header from '../../components/header/header';
import NavigationTabs from '../../components/nav-tabs/nav-tabs';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import { TOfferList } from '../../types/offer';

type TMainPageProps = {
  offersList: TOfferList;
}
//? мб вынести map в отдельный компонент?

function MainPage ({offersList}:TMainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <NavigationTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <OfferCardList offersList={offersList}/>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
