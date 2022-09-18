import { User } from 'src/users/entities/user.entity';

export interface IQuery {
  id?: number;
  email?: string;
  username?: string;

  take?: number;
  skip?: number;
  keyword?: string;
  order?: 'ASC' | 'DESC' | null;
}
