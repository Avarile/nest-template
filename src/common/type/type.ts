export interface IBaseEntity {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IUserEntity {
  username: string;
  email: string;
  password: string;
  activated: boolean;
  deleted_soft: boolean;
  avatar?: string;
}

export interface IUserAuthEntity {
  // the methods of login
  // well, normally I will start with login with password
  type: 'PASSWORD' | 'EMAIL' | 'MOBILE_TEXT';
  // query key
  value: string;
  // different methods may return different info here.
  data?: string;
  userId: number;
}
