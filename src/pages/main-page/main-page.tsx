import Header from '../../components/header/header';
import NavigationTabs from '../../components/nav-tabs/nav-tabs';
import OfferListBlock from '../../components/offer-list-block/offer-list-block';
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
        <OfferListBlock offersList={offersList}/>
      </main>
    </div>
  );
}

export default MainPage;
