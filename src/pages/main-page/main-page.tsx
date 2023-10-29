import Header from '../../components/header/header';
import NavigationTabs from '../../components/nav-tabs/nav-tabs';
import OfferCard from '../../components/offer-card/offer-card';
import SortBlock from '../../components/sort-block/sort-block';
import { TOfferList } from '../../types/offer';

type TMainPageProps = {
  offersList: TOfferList;
  offerCount: number;
}
//TODO: надо оптимально разделить. Sort вроде ок, но собирать вместе не в странице а в компоненте
//? мб вынести map в отдельный компонент?

function MainPage ({offerCount, offersList}:TMainPageProps): JSX.Element {
  const offers = offersList.map((item) => <OfferCard {...item} key={item.id}/>);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <NavigationTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offerCount} places to stay in Amsterdam</b>
              <SortBlock/>
              <div className="cities__places-list places__list tabs__content">
                {offers}
              </div>
            </section>
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
