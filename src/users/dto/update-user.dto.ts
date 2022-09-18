import { PartialType } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto {
  @IsNumber()
  id: number;

  payload: UpdateUserPayloadDto;
}

class UpdateUserPayloadDto {
  @IsString()
  username?: string;

  @IsBoolean()
  verified?: false;

  @IsNumber()
  permissions?: 0;

  @IsString()
  password?: string;

  @IsEmail()
  email?: string;

  @IsString()
  @IsOptional()
  companys?: string;

  @IsString()
  @IsOptional()
  avatar?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  position?: string;

  @IsString()
  @IsOptional()
  organization?: string;

  @IsString()
  @IsOptional()
  personalTags?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  address_city?: string;

  @IsString()
  @IsOptional()
  address_state?: string;

  @IsString()
  @IsOptional()
  address_zip?: number;
}
