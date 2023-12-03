import { AuthorizationStatus } from '../consts';

export type TUser = {
  'avatarUrl': string;
  'id': number;
  'isPro': boolean;
  'name': string;
};

export type TUserAuthorisation = TUser & {
  'email': string;
  'token': string;
};

export type TAuthorisation = typeof keyof AuthorizationStatus;
