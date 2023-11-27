import { TOfferList, TSortItem } from '../types';

function calcHiddenPremiumClass(isPremium: boolean, className: string): string {
  const classHiddenPremium = !isPremium ? ' visually-hidden' : '';
  return (`${className}${classHiddenPremium}`);
}

function calcRaitingPersent(rating:number): string {
  return (`${Math.round(+rating * 100 / 5)}%`);
}

function sortOffersList(offersList: TOfferList, sortItem: TSortItem): TOfferList {
  switch (sortItem) {
    case 'Popular':
      return offersList;
    case 'Price: high to low':
      return offersList.sort((a, b) => b.price - a.price);
    case 'Price: low to high':
      return offersList.sort((a, b) => -(b.price - a.price));
    case 'Top rated first':
      return offersList.sort((a, b) => b.rating - a.rating);
  }
}

export { calcHiddenPremiumClass, calcRaitingPersent, sortOffersList };
