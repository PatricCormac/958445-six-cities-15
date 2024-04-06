import { Helmet } from 'react-helmet-async';

import { Favorites } from '../../components';
import { useAppSelector } from '../../hooks';
import { getOffers } from '../../store/offers/selectors';

export function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(getOffers);

  return (
    <div className="page__favorites-container container">
      <Helmet>
        <title>Favorites</title>
      </Helmet>
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </div>
            <Favorites offers={offers} />
          </li>
        </ul>
      </section>
    </div>
  );
}
