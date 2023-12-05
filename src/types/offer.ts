import { TCity, TLocation } from '.';

export type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type TOfferLight = {
  title: string;
  location: TLocation;
  id: string;
  isFavorite: boolean;
  isPremium: boolean;
  previewImage: string;
  price: number;
  rating: number;
  type: string;
  city: TCity;
}

export type TOffer = TOfferLight & {
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
  description: string;
}

export type TOfferList = TOfferLight[];


