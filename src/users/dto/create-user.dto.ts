import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { BaseEntity } from 'src/common/type';
// import { User } from '../entities/user.entity';

export class CreateUserDto {
  // basic info
  @IsString()
  @Max(200, { message: 'username cannot exceeds 200 letters' })
  username: string;

  @IsEmail()
  @Max(200, { message: 'email address can not exceeds 200 letters' })
  email: string;

  @IsString()
  @Min(6, { message: 'password cannot be less than 6 letters' })
  @Max(20, { message: 'password cannot exceed 20 letters' })
  password: string;
}
