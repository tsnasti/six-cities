import {Link} from 'react-router-dom';
import {Offer} from '../../types/offer';
import {addFavoriteAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import {addRating, FavoriteStatus} from '../../const';

type CardProps = {
  offer: Offer;
  addActiveCard ? : ((Offer: Offer | undefined) => void) | undefined;
};

const addPremiumStatus = (isPremium: boolean) => isPremium ? <div className="place-card__mark"><span>Premium</span></div> : '';

function Card ({offer, addActiveCard}: CardProps): JSX.Element {
  const {id, previewImage, price, title, type, rating, isPremium, isFavorite} = offer;
  const dispatch = useAppDispatch();
  const clickHandle = () => {
    dispatch(addFavoriteAction({hotelId: id, status: isFavorite ? FavoriteStatus.NotFavorites : FavoriteStatus.IsFavorites}));
  };

  return (
    <article id={String(id)} className="cities__card place-card" onMouseOver={() => addActiveCard ? addActiveCard(offer) : ''} onMouseLeave={() => addActiveCard ? addActiveCard(undefined) : ''}>
      {addPremiumStatus(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${String(id)}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button" onClick={clickHandle}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${addRating(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${String(id)}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
