export type TLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
}

type TCity = {
  location: TLocation;
  name: string;
}

type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type TOffer = {
  title: string;
  bedrooms?: number;
  location?: TLocation;
  description?: string;
  goods?: [string];
  host?: THost;
  id: number;
  images?: [string];
  isFavorite: boolean;
  isPremium: boolean;
  maxAdults?: number;
  previewImage: string;
  price: number;
  rating: number;
  type: string;
  city?: TCity;
}

export type TOfferList = TOffer[];


