type TMapProps = {
  activeOfferId: string;
}

function Map({activeOfferId}: TMapProps): JSX.Element {
  return (
    <div className="cities__right-section" data-id={activeOfferId}>
      <section className="cities__map map"></section>
    </div>
  );
}

export default Map;
