import { Exclude, Expose } from 'class-transformer';
import { User } from '../entities/user.entity';

export class UserResponseDefaultDto extends User {
  @Expose()
  id: number;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  deletedAt: Date;

  @Expose()
  deleted: boolean;

  @Expose()
  username: string;

  @Expose()
  email: string;

  password: string;

  @Expose()
  verified: boolean;

  @Expose()
  // Authentication
  permissions: 0 | 1 | 2 | 3;

  @Expose()
  // optional info
  companys: string;

  @Expose()
  avatar?: string;

  @Expose()
  bio?: string;

  @Expose()
  position?: string;

  @Expose()
  organization?: string;

  @Expose()
  personalTags?: string;

  @Expose()
  // address info
  address?: string;

  @Expose()
  address_city?: string;

  @Expose()
  address_state?: string;

  @Expose()
  address_zip?: number;
}
