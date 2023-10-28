import MainPage from '../../pages/main-page/main-page';
import { TOfferList } from '../../types/offer';

type TAppProps = {
  offerCount: number;
  offersList: TOfferList;
}

function App ({offerCount, offersList} : TAppProps): JSX.Element {
  return (
    <MainPage offerCount={offerCount} offersList={offersList}/>
  );
}

export default App;
