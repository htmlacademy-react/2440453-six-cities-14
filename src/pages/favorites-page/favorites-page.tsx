import CityOfferList from '../../components/city-offer-list/city-offer-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { CITY_LIST } from '../../consts';
import { TOfferList } from '../../types';


type TFavoritesProps = {
  offersList: TOfferList;
  cityList: typeof CITY_LIST;
}

function FavoritesPage({offersList, cityList}: TFavoritesProps) : JSX.Element {//TODO напрашивается компонент для одного города
  const cities: JSX.Element[] = [];
  let offersCityList: TOfferList = [];
  cityList.forEach((item) => {
    offersCityList = offersList.filter((offer) => offer.city.name === item);
    if (offersCityList.length > 0) {
      cities.push(
        <CityOfferList cityName={item} offersList={offersCityList}/>
      );
    }
  });

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default FavoritesPage;
