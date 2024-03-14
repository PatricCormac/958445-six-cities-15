import { useCallback, useState } from 'react';

import type { Offer } from '../../types';
import { PlaceCard } from '../place-card/place-card';

type Props = {
  offers: ReadonlyArray<Offer>;
};

export function Offers({ offers }: Props) {
  const [, setActiveCard] = useState<null | Offer>(null);
  const handleMouseMove = useCallback((evtName: string, card: Offer) => {
    if (evtName === 'mouseenter') {
      setActiveCard(card);
    } else {
      setActiveCard(null);
    }
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          offer={offer}
          key={offer.id}
          className="cities"
          handleMouseMove={handleMouseMove}
        />
      ))}
    </div>
  );
}
