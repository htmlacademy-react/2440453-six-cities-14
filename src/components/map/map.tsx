import './map.scss';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import { DEFAULT_CITY, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { TOfferList } from '../../types';

//"cities__right-section"
//<section className="cities__map map"></section>

type TMapProps = {
  activeOfferId: number;
  offers: TOfferList;
};

function Map({offers, activeOfferId}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, DEFAULT_CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOfferId, currentCustomIcon, defaultCustomIcon]);

  return (
    <div
      className="map"
      data-id={activeOfferId}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
