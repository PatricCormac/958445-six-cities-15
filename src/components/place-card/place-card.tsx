import cn from 'classnames';
import { Link } from 'react-router-dom';
import { MouseEventHandler, useCallback } from 'react';

import type { Offer } from '../../types';
import { AppRoutesEnum } from '../../consts';

type Props = Readonly<{
  offer: Offer;
  isActive?: boolean;
  className?: string;
  handleMouseMove?: (offer: Offer) => void;
}>;

export function PlaceCard(props: Props) {
  const { offer, isActive, handleMouseMove } = props;
  const link = `${AppRoutesEnum.OFFER}/${offer.id}`;
  const handleMouseEvent: MouseEventHandler<HTMLElement> = useCallback(
    () => handleMouseMove?.(offer),
    [offer, handleMouseMove]
  );

  return (
    <article
      onMouseLeave={handleMouseEvent}
      onMouseEnter={handleMouseEvent}
      className={`${props.className}__card place-card`}
    >
      {offer.premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${props.className}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={link}>
          <img
            width="260"
            height="200"
            alt="Place image"
            src="img/apartment-01.jpg"
            className="place-card__image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            type="button"
            className={cn('place-card__bookmark-button button', {
              ['place-card__bookmark-button--active']: isActive,
            })}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rate * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={link}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}
