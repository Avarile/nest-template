import { IsNumber, IsString } from 'class-validator';
import { IQuery } from 'src/common/type/query';

export class QueryUserDto implements IQuery {
  @IsNumber()
  id?: number;

  @IsNumber()
  email?: string;

  @IsString()
  username?: string;

  @IsNumber()
  take?: number;

  @IsNumber()
  skip?: number;

  @IsString()
  keyword?: string;

  @IsString()
  order?: 'ASC' | 'DESC' | null;
}
