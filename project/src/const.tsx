export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  Root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum Rating {
  One = 20,
  Two = 40,
  Three = 60,
  Four = 80,
  Five = 100,
}

export function addRating (value: number) {
  const rating = Math.round(value);

  switch(rating) {
    case 1:
      return Rating.One;
    case 2:
      return Rating.Two;
    case 3:
      return Rating.Three;
    case 4:
      return Rating.Four;
    case 5:
      return Rating.Five;
  }
}

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITES = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
};

export const SORT = {
  POPULAR: 'Popular',
  LOW_PRICE: 'Price: low to high',
  HIGH_PRICE: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

export const TIMEOUT_SHOW_ERROR = 5000;

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean => authorizationStatus === AuthorizationStatus.Unknown;

export const VALID_PASSWORD_LENGTH = 2;
