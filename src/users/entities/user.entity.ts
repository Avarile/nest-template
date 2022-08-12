import { BaseEntity } from 'src/common/type';
import { Entity, Column } from 'typeorm';
import {
  IsString,
  IsEmail,
  IsBoolean,
  IsNumber,
  IsArray,
} from 'class-validator';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 200 })
  @IsString()
  username: string;

  @Column({ unique: true, length: 100 })
  @IsEmail()
  email: string;

  @Column({ length: 20 })
  @IsString()
  password: string;

  @Column({ default: false })
  @IsBoolean()
  activated: boolean; //

  @Column()
  @IsString()
  avatar?: string; // this really is not nessacery in the beginninig.
  // so I can just use 4 different avatar, member / supplier / admin / empire --- which is Mr Sansoni himself.

  @Column()
  @IsString()
  address?: string; // because sqlite does not support array, so we can simply stringfy the array to a string "[15, "seabird dr", "PointCook", "Melbourne" , "Victoria"]"

  @Column()
  @IsBoolean()
  verified: boolean; // Email verification tag
  @Column()
  @IsNumber()
  phoneNumber: number;

  @Column()
  @IsArray()
  permissions: string; // [ "Victoria_region_1", "Victoria_region_2"]

  @Column()
  @IsString()
  organization: String; // which is the company name

  @Column()
  @IsString()
  desc: String; // [A Logistics Operation as well as a programmer]
}
