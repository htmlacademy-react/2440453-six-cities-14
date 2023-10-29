import Header from '../../components/header/header';
import NearbyPlaces from '../../components/nerby-places/nearby-places';
import Offer from '../../components/offer/offer';
//? мб стоит выделить весь мейн как компонент оффер. Тогда места поблизости будут в том компоненте
function OfferPage () : JSX.Element {
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--offer">
        <Offer/>
        <NearbyPlaces/>
      </main>
    </div>
  );
}

export default OfferPage;
