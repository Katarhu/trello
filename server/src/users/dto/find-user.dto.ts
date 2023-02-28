import { UserDocument } from '@users/users.model';

type UserFindFields = 'id' | 'email' | 'username';

export type IFindUserFields = {
  [Key in UserFindFields]?: string;
};

// type FindUserSuccess = [null, null, false];
// type FindUserFailure = [UserDocument, UserFindFields, true];

export interface IFindUserSuccess {
  user: null;
  existingField: null;
  isUserExist: false;
}

export interface IFindUserFailure {
  user: UserDocument;
  existingField: UserFindFields;
  isUserExist: true;
}

export type TFindUserReturn = IFindUserSuccess | IFindUserFailure;
