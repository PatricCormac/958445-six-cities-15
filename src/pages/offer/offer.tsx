import { Helmet } from 'react-helmet-async';
import { Fragment, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { offers } from '../../mocks';
import type { Offer } from '../../types';
import { Form, PlaceCard } from '../../components';
import { NotFoundPage } from '../not-found/not-found';

export function OfferPage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const [offer, setOffer] = useState<null | Offer>(null);

  useEffect(() => {
    if (id?.length) {
      const offerData = offers.find((item) => item.id === id);

      if (offerData) {
        setOffer(offerData);
      }
    }
  }, [id, navigate]);

  return offer ? (
    <Fragment>
      <Helmet>
        <title>{offer.name}</title>
      </Helmet>
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            <div className="offer__image-wrapper">
              <img
                src="img/room.jpg"
                alt="Photo studio"
                className="offer__image"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-01.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-02.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-03.jpg"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                src="img/studio-01.jpg"
                className="offer__image"
              />
            </div>
            <div className="offer__image-wrapper">
              <img
                alt="Photo studio"
                className="offer__image"
                src="img/apartment-01.jpg"
              />
            </div>
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offer.premium && (
              <div className="offer__mark">
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{offer.name}</h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: '80%' }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">
                {offer.rate}
              </span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                Apartment
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offer.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">Wi-Fi</li>
                <li className="offer__inside-item">Washing machine</li>
                <li className="offer__inside-item">Towels</li>
                <li className="offer__inside-item">Heating</li>
                <li className="offer__inside-item">Coffee machine</li>
                <li className="offer__inside-item">Baby seat</li>
                <li className="offer__inside-item">Kitchen</li>
                <li className="offer__inside-item">Dishwasher</li>
                <li className="offer__inside-item">Cabel TV</li>
                <li className="offer__inside-item">Fridge</li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    width="74"
                    height="74"
                    alt="Host avatar"
                    src="img/avatar-angelina.jpg"
                    className="offer__avatar user__avatar"
                  />
                </div>
                <span className="offer__user-name">Angelina</span>
                <span className="offer__user-status">Pro</span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by
                  the unique lightness of Amsterdam. The building is green and
                  from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand
                  Square and National Opera, but where the bustle of the city
                  comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">
                Reviews &middot; <span className="reviews__amount">1</span>
              </h2>
              <ul className="reviews__list">
                <li className="reviews__item">
                  <div className="reviews__user user">
                    <div className="reviews__avatar-wrapper user__avatar-wrapper">
                      <img
                        width="54"
                        height="54"
                        alt="Reviews avatar"
                        src="img/avatar-max.jpg"
                        className="reviews__avatar user__avatar"
                      />
                    </div>
                    <span className="reviews__user-name">Max</span>
                  </div>
                  <div className="reviews__info">
                    <div className="reviews__rating rating">
                      <div className="reviews__stars rating__stars">
                        <span style={{ width: '80%' }}></span>
                        <span className="visually-hidden">Rating</span>
                      </div>
                    </div>
                    <p className="reviews__text">
                      A quiet cozy and picturesque that hides behind a a river
                      by the unique lightness of Amsterdam. The building is
                      green and from 18th century.
                    </p>
                    <time className="reviews__time" dateTime="2019-04-24">
                      April 2019
                    </time>
                  </div>
                </li>
              </ul>
              <Form />
            </section>
          </div>
        </div>
        <section className="offer__map map"></section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">
            Other places in the neighbourhood
          </h2>
          <div className="near-places__list places__list">
            {offers.slice(0, 3).map((item) => (
              <PlaceCard offer={item} key={item.id} className="near-places" />
            ))}
          </div>
        </section>
      </div>
    </Fragment>
  ) : (
    <NotFoundPage />
  );
}
