import { Form } from '..';
import { Review } from './review/review';
import { useAppSelector } from '../../hooks';

export function Reviews() {
  const reviews = useAppSelector((state) => state.reviews);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <Form />
    </section>
  );
}
