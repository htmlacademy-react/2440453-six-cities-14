import './map.scss';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import leaflet, { layerGroup } from 'leaflet';
import { CITIES_LIST, URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../consts';
import { TCityName, TOfferList } from '../../types';

type TMapProps = {
  activeOfferId: number;
  offers: TOfferList;
  className: string;
  cityName: TCityName;
};

function Map({offers, activeOfferId, className, cityName}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const fullClassName = `${className}__map`;
  const city = CITIES_LIST.find((item) => item.name === cityName);

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
    if (city && map) {
      const loc: leaflet.LatLngExpression = {
        lat: city.location.latitude,
        lng: city.location.longitude};
      map.setView(loc, city.location.zoom);
    }
  }, [map, city]);
  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(markerLayer);
      });
    }
  }, [map, offers, activeOfferId, currentCustomIcon, defaultCustomIcon, cityName]); //? можно ли избавиться как то от зависимостей?

  return (
    <div
      className={fullClassName}
      data-id={activeOfferId}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
