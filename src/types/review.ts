import { TUser } from '.';

export type TReview = {
  'id': number;
  'user': TUser;
  'rating': number;
  'comment': string;
  'date': Date;
}

export type TOfferReview = TReview & {
  'offerId': number;
}

export type TReviewList = TOfferReview [];

