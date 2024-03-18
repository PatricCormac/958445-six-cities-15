import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';

import { useMap } from './hooks';
import type { City, Offer } from '../../types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from './consts';

type Props = Readonly<{
  city: City;
  selectedPoint: null | Offer;
  points: ReadonlyArray<Offer>;
}>;

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export function Map(props: Props) {
  const { city, points, selectedPoint } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker
          .setIcon(
            selectedPoint !== null && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  return (
    <section className="cities__map map">
      <div style={{ height: '100%' }} ref={mapRef}></div>
    </section>
  );
}
